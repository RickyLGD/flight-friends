// The game as a phone app: putting it on the home screen, moving progress into it on an
// iPhone, keeping its files for playing without internet, and counting installs.
(function () {
    var PREFIX = "flight_friends_";  // Every saved thing of the game starts with this.
    var CODE_START = "FFMOVE1:";  // The start of a progress code, so other copied text is not taken for one.
    var MOVE_ASKED_KEY = "flight_friends_move_asked";
    var LATER_KEY = "flight_friends_install_later";

    function isInstalled() {
        var media = window.matchMedia && window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)");
        return !!(media && media.matches) || window.navigator.standalone === true;
    }

    function isApple() {
        // iPads say they are Macs, but a Mac has no touch screen.
        return /iPhone|iPad|iPod/i.test(navigator.userAgent)
            || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    }

    function isPhone() {
        return isApple() || /Android/i.test(navigator.userAgent);
    }

    function isWeChat() {
        return /MicroMessenger/i.test(navigator.userAgent);
    }

    function isTurnedView() {
        // The same rule as the page and game.js: an upright phone, drawn turned on its side.
        var media = window.matchMedia && window.matchMedia("(pointer: coarse) and (max-width: 540px) and (orientation: portrait)");
        return !!(media && media.matches);
    }

    function track(event, details) {
        try {
            if (window.flightFriendsTrack) window.flightFriendsTrack(event, JSON.stringify(details || {}));
        } catch (error) {}  // Statistics must never get in the way.
    }

    function readStorage(key) {
        try { return window.localStorage.getItem(key); } catch (error) { return null; }
    }

    function writeStorage(key, value) {
        try { window.localStorage.setItem(key, value); } catch (error) {}
    }

    // ----- Moving progress: an iPhone keeps a home screen app's saves apart from Safari's -----

    function readSave() {
        var save = {};
        try {
            for (var i = 0; i < window.localStorage.length; i++) {
                var key = window.localStorage.key(i);
                if (key && key.indexOf(PREFIX) === 0 && key !== LATER_KEY && key !== MOVE_ASKED_KEY) {
                    save[key] = window.localStorage.getItem(key);
                }
            }
        } catch (error) {}
        return save;
    }

    function makeMoveCode(save) {
        // Letters and numbers only, so the code survives being copied and pasted anywhere.
        return CODE_START + window.btoa(unescape(encodeURIComponent(JSON.stringify(save))));
    }

    function readMoveCode(text) {
        // Gives back the saved things in a progress code, or null if the text is not one.
        text = String(text || "").replace(/\s+/g, "");
        var start = text.indexOf(CODE_START);
        if (start < 0) return null;
        try {
            var save = JSON.parse(decodeURIComponent(escape(window.atob(text.slice(start + CODE_START.length)))));
            var clean = {}, count = 0;
            for (var key in save) {
                if (Object.prototype.hasOwnProperty.call(save, key) && key.indexOf(PREFIX) === 0
                        && typeof save[key] === "string") {
                    clean[key] = save[key];
                    count += 1;
                }
            }
            return count ? clean : null;
        } catch (error) {
            return null;
        }
    }

    function hasProgress() {
        return !!(readStorage("flight_friends_pets") || readStorage("flight_friends_best_score"));
    }

    function hasPlayed() {
        // The same signs game.js reads: a flight was started, or there is a best score or a coin.
        if (Number(readStorage("flight_friends_best_score")) > 0) return true;
        try {
            var saved = JSON.parse(readStorage("flight_friends_pets") || "{}");
            return !!saved && (saved.played === true || saved.coins > 0);
        } catch (error) {
            return false;
        }
    }

    function copyText(text) {
        // Phones only allow copying during the tap itself, so this runs straight from a button.
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).then(function () { return true; },
                                                              function () { return copyTheOldWay(text); });
        }
        return Promise.resolve(copyTheOldWay(text));
    }

    function copyTheOldWay(text) {
        var box = document.createElement("textarea");
        box.value = text;
        box.setAttribute("readonly", "");
        box.style.position = "fixed";
        box.style.opacity = "0";
        document.body.appendChild(box);
        box.select();
        box.setSelectionRange(0, text.length);
        var copied = false;
        try { copied = document.execCommand("copy"); } catch (error) {}
        document.body.removeChild(box);
        return copied;
    }

    function moveIn(save) {
        for (var key in save) writeStorage(key, save[key]);
        writeStorage(MOVE_ASKED_KEY, "1");
        track("progress_moved", {things: Object.keys(save).length});
        show("app-move-done");
        hide("app-move");
        window.setTimeout(function () { window.location.reload(); }, 900);
    }

    // ----- The little cards and panels in the page -----

    function find(id) { return document.getElementById(id); }
    function show(id) { var element = find(id); if (element) element.hidden = false; }
    function hide(id) { var element = find(id); if (element) element.hidden = true; }
    function onTap(id, action) { var element = find(id); if (element) element.addEventListener("click", action); }

    var installPrompt = null;  // Android's own "install" window, kept for when the player asks for it.

    function showSteps() {
        var steps = isWeChat() ? "app-steps-wechat" : isApple() ? "app-steps-apple" : "app-steps-android";
        ["app-steps-wechat", "app-steps-apple", "app-steps-android"].forEach(function (id) {
            if (id === steps) show(id); else hide(id);
        });
        hide("app-copied");
        if (steps === "app-steps-apple" && hasProgress()) {
            copyText(makeMoveCode(readSave())).then(function (copied) { if (copied) show("app-copied"); });
        }
        show("app-help");
        track("install_steps", {how: steps.replace("app-steps-", "")});
    }

    function startInstall() {
        if (installPrompt) {
            var prompt = installPrompt;
            installPrompt = null;
            prompt.prompt();
            prompt.userChoice.then(function (choice) {
                track("install_choice", {outcome: choice && choice.outcome});
            }).catch(function () {});
            return;
        }
        showSteps();
    }

    function setUp() {
        var installed = isInstalled();
        document.documentElement.setAttribute("data-app", installed ? "installed" : "page");
        if (installed && isApple() && startedEmpty && !readStorage(MOVE_ASKED_KEY)) show("app-move");
        // Asking a visitor to install before they have even played sent people away, so the
        // card waits: it shows after the first finished flight (game.js calls afterRun), and
        // from the start only for someone who has played before.
        function offerInstall() {
            var later = false;
            try { later = window.sessionStorage.getItem(LATER_KEY) === "1"; } catch (error) {}
            if (!installed && isPhone() && !later) show("app-card");
        }
        window.flightFriendsApp.afterRun = offerInstall;
        if (hasPlayed()) offerInstall();

        // A phone held upright draws the game turned on its side. A first-time visitor gets an
        // upright welcome first, so the turned page is not the first thing they see. The page's
        // own rules only show it on an upright phone; turning the phone hides it by itself.
        if (!installed && !hasPlayed()) {
            show("app-welcome");
            if (isTurnedView()) track("welcome_shown", {});
        }
        onTap("app-welcome-go", function () {
            hide("app-welcome");
            track("welcome_start", {});
        });

        onTap("app-install", startInstall);
        onTap("app-later", function () {
            hide("app-card");
            try { window.sessionStorage.setItem(LATER_KEY, "1"); } catch (error) {}
        });
        onTap("app-help-close", function () { hide("app-help"); });
        onTap("app-copy-again", function () {
            copyText(makeMoveCode(readSave())).then(function (copied) { if (copied) show("app-copied"); });
        });
        onTap("app-paste", function () {
            if (!navigator.clipboard || !navigator.clipboard.readText) {
                show("app-paste-box");
                return;
            }
            navigator.clipboard.readText().then(function (text) {
                var save = readMoveCode(text);
                if (save) moveIn(save); else show("app-paste-box");
            }, function () { show("app-paste-box"); });
        });
        onTap("app-paste-go", function () {
            var save = readMoveCode(find("app-paste-text").value);
            if (save) moveIn(save); else show("app-paste-wrong");
        });
        onTap("app-fresh", function () {
            writeStorage(MOVE_ASKED_KEY, "1");
            hide("app-move");
        });

        window.addEventListener("beforeinstallprompt", function (event) {
            event.preventDefault();  // Shown when the player taps "install", not out of the blue.
            installPrompt = event;
        });
        window.addEventListener("appinstalled", function () {
            hide("app-card");
            hide("app-help");
            track("app_installed", {});
        });

        if ("serviceWorker" in navigator && (window.location.protocol === "https:"
                                             || window.location.hostname === "localhost")) {
            navigator.serviceWorker.register("sw.js").catch(function () {});
        }
    }

    // Checked now, before game.js runs: the game may save as soon as it starts.
    var startedEmpty = typeof window.flightFriendsStartedEmpty === "boolean" ? window.flightFriendsStartedEmpty : !hasProgress();

    // Shared with the checks in tests/app_browser_checks.cjs.
    window.flightFriendsApp = {makeMoveCode: makeMoveCode, readMoveCode: readMoveCode, readSave: readSave};
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setUp);
    else setUp();
})();
