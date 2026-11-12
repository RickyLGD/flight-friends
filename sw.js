// Keeps the game's files on the phone, so the game opens fast and still works without internet.
// A file with a version in its address (?v=...) never changes, so the copy kept here is used
// straight away. Everything else, like the page itself, is asked for fresh first, so a new
// version of the game always arrives; the kept copy is only used when there is no internet.
var CACHE = "flight-friends";

self.addEventListener("install", function () {
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
    var request = event.request, url = new URL(request.url);
    // Statistics and the leaderboard live on other websites: those go straight to the internet.
    if (request.method !== "GET" || url.origin !== self.location.origin) return;
    event.respondWith(url.searchParams.has("v") ? useKeptCopyFirst(request, url) : useInternetFirst(request));
});

function useKeptCopyFirst(request, url) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (kept) {
            if (kept) return kept;
            return fetchWithDeadline(request).then(function (response) {
                if (response.ok) {
                    cache.put(request, response.clone());
                    forgetOldVersions(cache, url);
                }
                return response;
            });
        });
    });
}

function forgetOldVersions(cache, url) {
    // Only the newest copy of each file is kept, so the phone does not fill up over the updates.
    cache.keys().then(function (requests) {
        requests.forEach(function (old) {
            var oldUrl = new URL(old.url);
            if (oldUrl.pathname === url.pathname && oldUrl.search !== url.search) cache.delete(old);
        });
    });
}

function fetchWithDeadline(request) {
    return new Promise(function (resolve, reject) {
        var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
        var timer = setTimeout(function () {
            if (controller) controller.abort();
            reject(new Error("Network timeout"));
        }, 12000);
        fetch(request, controller ? {signal: controller.signal} : {}).then(function (response) {
            clearTimeout(timer); resolve(response);
        }, function (error) { clearTimeout(timer); reject(error); });
    });
}
function useInternetFirst(request) {
    return caches.match(request, {ignoreSearch: true}).then(function (kept) {
        var network = fetchWithDeadline(request).then(function (response) {
            if (!response.ok) return kept || response;
            var copy = response.clone();
            caches.open(CACHE).then(function (cache) { cache.put(request, copy); }).catch(function () {});
            return response;
        }).catch(function () { return kept || Response.error(); });
        if (!kept) return network;
        // A returning player can use the saved page while the network is slow.
        return new Promise(function (resolve) {
            var timer = setTimeout(function () { resolve(kept); }, 2500);
            network.then(function (response) { clearTimeout(timer); resolve(response); });
        });
    });
}
