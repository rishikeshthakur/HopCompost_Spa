"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "ORIGIN", {
        get: function () { return 'http://localhost/HopCompost_Api'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return this.ORIGIN + "/api"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "WEB_FILESTORE", {
        get: function () { return this.ORIGIN + "/FileStore"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "A2_ENDPOINT", {
        get: function () { return 'http://localhost:3000'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "NOTIFICATION_THEME", {
        get: function () { return 'bootstrap'; } // Options include: 'default'; 'material' and 'bootstrap' 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "NOTIFICATION_SHOWCLOSE", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "NOTIFICATION_TIMEOUT", {
        get: function () { return 5000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "PAGE_SIZE", {
        get: function () { return 15; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "AUTH0_CLIENT_ID", {
        get: function () { return 'HKNqiE4Vo6JEA4yn4ikY1HoFdzRXTZFx'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "AUTH0_DOMAIN", {
        get: function () { return 'trainingschool.auth0.com'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "AUTH0_EMAIL", {
        get: function () { return 'something@youremail.com'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "AUTH0_TITLE", {
        get: function () { return 'IHES Auth'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "LOCALSTORAGE_LISTFILTER", {
        get: function () { return 'listFilter'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "LOCALSTORAGE_PAGEINDEX", {
        get: function () { return 'pageIndex'; },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map