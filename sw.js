// The old address's helper that kept game files on the phone. It now deletes itself, so the
// old address always reaches the page that sends players to the new one.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) {
    event.waitUntil(self.registration.unregister().then(function () {
        return self.clients.matchAll({type: "window"});
    }).then(function (windows) {
        windows.forEach(function (w) { w.navigate(w.url); });
    }));
});
