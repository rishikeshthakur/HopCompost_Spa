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
Object.defineProperty(exports, "__esModule", { value: true });
var base_component_1 = require("./base.component");
var BaseListComponent = (function (_super) {
    __extends(BaseListComponent, _super);
    // localListFilter: string = AppSettings.LOCALSTORAGE_LISTFILTER;
    // localPageIndex: string = AppSettings.LOCALSTORAGE_PAGEINDEX;
    // listFilter: string = '';
    // pageIndex: number;
    // pageSize: number;
    // pageCase: string = 'all';
    // totalItems: number = 0;
    // totalPages: number = 0;
    function BaseListComponent() {
        // console.log(this._router.url.split('/')[1]);
        return _super.call(this) || this;
    }
    return BaseListComponent;
}(base_component_1.BaseComponent));
exports.BaseListComponent = BaseListComponent;
//# sourceMappingURL=base.list.component.js.map