"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "ORIGIN", {
        // private static get ORIGIN(): string { return 'http://localhost/HopCompost_Api'; } 
        //private static get ORIGIN(): string { return 'http://localhost:34940'; } 
        get: function () { return 'http://hopcompostapi-slot.azurewebsites.net'; },
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
    Object.defineProperty(AppSettings, "NOTIFICATION_THEME", {
        //public static get A2_ENDPOINT(): string { return 'http://localhost:3000'; }
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