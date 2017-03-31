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
var bin_service_1 = require("./bin.service");
//import { NotificationService } from '../../shared/notification.service';
var BinProcessingDetailComponent = (function () {
    function BinProcessingDetailComponent(_route, _router, _binService) {
        this._route = _route;
        this._router = _router;
        this._binService = _binService;
        this.pageTitle = 'Bin Processing';
        this.binWeightCollection = {};
    }
    BinProcessingDetailComponent.prototype.ngOnInit = function () {
        this.onUndo();
    };
    BinProcessingDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BinProcessingDetailComponent.prototype.getBinWeightCollection = function (id) {
        var _this = this;
        this.sub = this._binService.getBinWeightCollection(id).subscribe(function (binWeightCollection) { return _this.binWeightCollection = binWeightCollection; }, function (error) {
            //this._notificationService.error(binSettings.FAIL_TOGETASSET);
        });
    };
    BinProcessingDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/bin-processings']);
    };
    BinProcessingDetailComponent.prototype.onUndo = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.binWeightCollection = {};
            if (id > 0) {
                _this.getBinWeightCollection(id);
            }
        }, function (error) {
            //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
        });
    };
    BinProcessingDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this._binService.saveBinWeightCollection(this.binWeightCollection).subscribe(function (success) {
            //this._notificationService.success(binSettings.SUCCESS_SAVEASSET);
            _this.onBack();
        }, function (error) {
            //this._notificationService.error(binSettings.FAIL_TOSAVEASSET);
        });
    };
    return BinProcessingDetailComponent;
}());
BinProcessingDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'bin-processing-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, bin_service_1.BinService])
], BinProcessingDetailComponent);
exports.BinProcessingDetailComponent = BinProcessingDetailComponent;
//# sourceMappingURL=bin-processing-detail.component.js.map