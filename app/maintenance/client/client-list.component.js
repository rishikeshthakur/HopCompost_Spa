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
var base_list_component_1 = require("./../../shared/base.list.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { NotificationService } from '../../shared/notification.service';
var client_service_1 = require("./client.service");
var ClientListComponent = (function (_super) {
    __extends(ClientListComponent, _super);
    function ClientListComponent(_clientService, _route, _router) {
        var _this = _super.call(this) || this;
        _this._clientService = _clientService;
        _this._route = _route;
        _this._router = _router;
        _this.pageTitle = 'Client List';
        _this.clients = [];
        return _this;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.clients = [];
        this.getActiveClients();
    };
    ClientListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClientListComponent.prototype.newClientOnClick = function () {
        this._router.navigate(['/client', 0]);
    };
    ClientListComponent.prototype.onDelete = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var id = idAttr.nodeValue;
        this.sub = this._clientService.deleteClient(id).subscribe(function (success) {
            //this._notificationService.success(ClientSettings.SUCCESS_SAVEASSET);
            _this.getActiveClients();
        }, function (error) {
            //this._notificationService.error(ClientSettings.FAIL_TOSAVEASSET);
        });
    };
    ClientListComponent.prototype.getActiveClients = function () {
        var _this = this;
        this.sub = this._clientService.getActiveClients()
            .subscribe(function (result) {
            _this.clients = result;
        }, function (error) {
            //this._notificationService.error(ClientSettings.FAIL_TOGETCLIENTS);
        });
    };
    return ClientListComponent;
}(base_list_component_1.BaseListComponent));
ClientListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'client-list.component.html'
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute, router_1.Router])
], ClientListComponent);
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map