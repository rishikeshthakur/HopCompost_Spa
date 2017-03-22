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
var PageComponent = (function () {
    function PageComponent() {
        this.pageIndex = 1;
        this.totalPages = 1;
        this.pageChanged = new core_1.EventEmitter();
    }
    PageComponent.prototype.ngOnInit = function () { };
    PageComponent.prototype.nextPageClick = function () {
        this.pageIndex += 1;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    };
    PageComponent.prototype.previousPageClick = function () {
        if (this.pageIndex > 0) {
            this.pageIndex -= 1;
        }
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    };
    PageComponent.prototype.firstPageClick = function () {
        this.pageIndex = 1;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    };
    PageComponent.prototype.lastPageClick = function () {
        this.pageIndex = this.totalPages;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    };
    return PageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "totalPages", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PageComponent.prototype, "pageChanged", void 0);
PageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'page-tag',
        templateUrl: 'page.component.html'
    }),
    __metadata("design:paramtypes", [])
], PageComponent);
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map