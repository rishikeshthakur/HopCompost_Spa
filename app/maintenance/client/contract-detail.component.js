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
var ContractDetailComponent = (function () {
    function ContractDetailComponent(_route, _router, _clientService) {
        this._route = _route;
        this._router = _router;
        this._clientService = _clientService;
        this.pageTitle = 'Contract Detail';
        this.contract = {};
        this.clientId = 0;
    }
    ContractDetailComponent.prototype.ngOnInit = function () {
        this.contract = {};
        this.onUndo();
    };
    ContractDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ContractDetailComponent.prototype.getContract = function (id) {
        var _this = this;
        this.sub = this._clientService.getContract(id).subscribe(function (contract) {
            _this.contract = contract;
        }, function (error) {
            //this._notificationService.error(ContractSettings.FAIL_TOGETASSET);
        });
    };
    ContractDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.contract.ClientId = this.clientId;
        this.sub = this._clientService.saveContract(this.contract).subscribe(function (success) {
            //this._notificationService.success(ContractSettings.SUCCESS_SAVEASSET);
            _this.onBack();
        }, function (error) {
            //this._notificationService.error(ContractSettings.FAIL_TOSAVEASSET);
        });
    };
    ContractDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/client', this.contract.ClientId]);
    };
    ContractDetailComponent.prototype.onUndo = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            if (id > 0) {
                _this.getContract(id);
            }
            _this.clientId = +params['clientId'];
        }, function (error) {
            //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
        });
    };
    return ContractDetailComponent;
}());
ContractDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'contract-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, client_service_1.ClientService])
], ContractDetailComponent);
exports.ContractDetailComponent = ContractDetailComponent;
//# sourceMappingURL=contract-detail.component.js.map