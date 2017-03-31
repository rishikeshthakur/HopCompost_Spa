"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var base_service_1 = require("../../shared/base.service");
var app_settings_1 = require("../../app.settings");
var BinService = (function (_super) {
    __extends(BinService, _super);
    function BinService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._binUrl = app_settings_1.AppSettings.API_ENDPOINT + "/BinCollection";
        _this._employeeUrl = app_settings_1.AppSettings.API_ENDPOINT + "/Employee";
        _this._clientUrl = app_settings_1.AppSettings.API_ENDPOINT + "/Client";
        return _this;
    }
    BinService.prototype.getEmployees = function () {
        return this._http.get(this._employeeUrl + "/GetLookup", this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.getClients = function () {
        return this._http.get(this._clientUrl + "/GetLookup", this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.getPastCollection = function (employeeId, clientId, selectedDate) {
        return this._http.get(this._binUrl + "/GetPastCollection?employeeId=" + (employeeId ? employeeId : '') + "&clientId=" + (clientId ? clientId : '') + "&selectedDate=" + (selectedDate ? selectedDate : ''), this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.getProcessingCollection = function () {
        return this._http.get(this._binUrl + "/GetBinCollectionByStatus?status=Unprocessed", this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.getBinWeightCollection = function (id) {
        return this._http.get(this._binUrl + "/GetBinWeightCollection?id=" + id, this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.getBin = function (id) {
        return this._http.get(this._binUrl + "?id=" + id, this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BinService.prototype.saveBinWeightCollection = function (binWeightCollection) {
        return this.save(binWeightCollection, this._binUrl + "/PostBinWeightCollection", this._http);
    };
    BinService.prototype.saveBin = function (bin) {
        bin.CollectionDate = null;
        return this.save(bin, this._binUrl, this._http);
    };
    BinService.prototype.deleteBin = function (id) {
        return this.delete(id, this._binUrl, this._http);
    };
    return BinService;
}(base_service_1.BaseService));
BinService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BinService);
exports.BinService = BinService;
//# sourceMappingURL=bin.service.js.map