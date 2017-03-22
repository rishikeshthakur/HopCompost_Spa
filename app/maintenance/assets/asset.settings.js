"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetSettings = (function () {
    function AssetSettings() {
    }
    Object.defineProperty(AssetSettings, "FAIL_TOGETASSETS", {
        get: function () { return 'Internal server error. Unable to get Assets!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "FAIL_TOGETASSET", {
        get: function () { return 'Internal server error. Unable to get Asset!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "FAIL_TOSAVEASSET", {
        get: function () { return 'Internal server error. Unable to save Asset!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "FAIL_TOGETASSETTYPES", {
        get: function () { return 'Internal server error. Unable to get AssetTypes!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "FAIL_TOGETASSETTYPE", {
        get: function () { return 'Internal server error. Unable to get Asset Type!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "FAIL_TOSAVEASSETTYPE", {
        get: function () { return 'Internal server error. Unable to save Asset Type!'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "SUCCESS_SAVEASSET", {
        get: function () { return 'Successfully saved Asset.'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetSettings, "SUCCESS_SAVEASSETTYPE", {
        get: function () { return 'Successfully saved Asset Type.'; },
        enumerable: true,
        configurable: true
    });
    return AssetSettings;
}());
exports.AssetSettings = AssetSettings;
//# sourceMappingURL=asset.settings.js.map