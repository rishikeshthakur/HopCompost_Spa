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
var bin_service_1 = require("./bin.service");
var BinProcessingListComponent = (function (_super) {
    __extends(BinProcessingListComponent, _super);
    function BinProcessingListComponent(_binService, _route, _router) {
        var _this = _super.call(this) || this;
        _this._binService = _binService;
        _this._route = _route;
        _this._router = _router;
        _this.pageTitle = 'Bin Processing List';
        _this.bins = [];
        return _this;
    }
    BinProcessingListComponent.prototype.ngOnInit = function () {
        this.getProcessingCollection();
    };
    BinProcessingListComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    BinProcessingListComponent.prototype.getProcessingCollection = function () {
        var _this = this;
        this.sub = this._binService.getProcessingCollection()
            .subscribe(function (result) {
            _this.bins = result;
        });
    };
    return BinProcessingListComponent;
}(base_list_component_1.BaseListComponent));
BinProcessingListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'bin-processing-list.component.html'
    }),
    __metadata("design:paramtypes", [bin_service_1.BinService,
        router_1.ActivatedRoute, router_1.Router])
], BinProcessingListComponent);
exports.BinProcessingListComponent = BinProcessingListComponent;
//# sourceMappingURL=bin-processing-list.component.js.map