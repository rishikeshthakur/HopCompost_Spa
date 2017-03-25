"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../../shared/shared.module");
var bin_routing_1 = require("./bin.routing");
var bin_collection_list_component_1 = require("./bin-collection-list.component");
var bin_collection_detail_component_1 = require("./bin-collection-detail.component");
var bin_processing_list_component_1 = require("./bin-processing-list.component");
var bin_processing_detail_component_1 = require("./bin-processing-detail.component");
var bin_service_1 = require("./bin.service");
var BinModule = (function () {
    function BinModule() {
    }
    return BinModule;
}());
BinModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            bin_routing_1.BinRouting
        ],
        declarations: [
            bin_collection_list_component_1.BinCollectionListComponent,
            bin_collection_detail_component_1.BinCollectionDetailComponent,
            bin_processing_list_component_1.BinProcessingListComponent,
            bin_processing_detail_component_1.BinProcessingDetailComponent,
        ],
        providers: [
            bin_service_1.BinService
        ]
    })
], BinModule);
exports.BinModule = BinModule;
//# sourceMappingURL=bin.module.js.map