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
var BinCollectionListComponent = (function (_super) {
    __extends(BinCollectionListComponent, _super);
    function BinCollectionListComponent(_binService, _route, _router) {
        var _this = _super.call(this) || this;
        _this._binService = _binService;
        _this._route = _route;
        _this._router = _router;
        _this.pageTitle = 'Bin Collection List';
        _this.bins = [];
        return _this;
    }
    BinCollectionListComponent.prototype.ngOnInit = function () {
        this.employees = this._binService.getEmployees();
        this.clients = this._binService.getClients();
    };
    BinCollectionListComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    BinCollectionListComponent.prototype.searchOnClick = function () {
        this.getPastCollection();
    };
    BinCollectionListComponent.prototype.employeeFilterChange = function (event) {
        this.employeeId = event.target.value;
    };
    BinCollectionListComponent.prototype.clientFilterChange = function (event) {
        this.clientId = event.target.value;
    };
    BinCollectionListComponent.prototype.getPastCollection = function () {
        var _this = this;
        this.sub = this._binService.getPastCollection(this.employeeId, this.clientId, this.selectedDate)
            .subscribe(function (result) {
            _this.bins = result;
        });
    };
    return BinCollectionListComponent;
}(base_list_component_1.BaseListComponent));
BinCollectionListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'bin-collection-list.component.html'
    }),
    __metadata("design:paramtypes", [bin_service_1.BinService,
        router_1.ActivatedRoute, router_1.Router])
], BinCollectionListComponent);
exports.BinCollectionListComponent = BinCollectionListComponent;
//# sourceMappingURL=bin-collection-list.component.js.map