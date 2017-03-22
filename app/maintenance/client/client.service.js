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
var ClientService = (function (_super) {
    __extends(ClientService, _super);
    function ClientService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._clientUrl = app_settings_1.AppSettings.API_ENDPOINT + "/Client";
        return _this;
    }
    ClientService.prototype.getActiveClients = function () {
        var url = "" + this._clientUrl;
        return this._http.get(url, this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getClient = function (id) {
        return this._http.get(this._clientUrl + "?id=" + id, this.getOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.saveClient = function (client) {
        return this.save(client, this._clientUrl, this._http);
    };
    return ClientService;
}(base_service_1.BaseService));
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map