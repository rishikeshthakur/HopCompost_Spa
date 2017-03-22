"use strict";
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
var router_1 = require("@angular/router");
var client_service_1 = require("./client.service");
//import { NotificationService } from '../../shared/notification.service';
var ClientDetailComponent = (function () {
    function ClientDetailComponent(_route, _router, _clientService) {
        this._route = _route;
        this._router = _router;
        this._clientService = _clientService;
        this.pageTitle = 'Client Detail';
        this.client = {};
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        this.onUndo();
    };
    ClientDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClientDetailComponent.prototype.getClient = function (id) {
        var _this = this;
        this.sub = this._clientService.getClient(id).subscribe(function (client) { return _this.client = client; }, function (error) {
            //this._notificationService.error(ClientSettings.FAIL_TOGETASSET);
        });
    };
    ClientDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this._clientService.saveClient(this.client).subscribe(function (success) {
            //this._notificationService.success(ClientSettings.SUCCESS_SAVEASSET);
            _this.onBack();
        }, function (error) {
            //this._notificationService.error(ClientSettings.FAIL_TOSAVEASSET);
        });
    };
    ClientDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/clients/return']);
    };
    ClientDetailComponent.prototype.onUndo = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            if (id > 0) {
                _this.getClient(id);
            }
        }, function (error) {
            //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
        });
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'client-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, client_service_1.ClientService])
], ClientDetailComponent);
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map