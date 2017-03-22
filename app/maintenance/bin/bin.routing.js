"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var bin_collection_list_component_1 = require("./bin-collection-list.component");
var bin_collection_detail_component_1 = require("./bin-collection-detail.component");
var bin_processing_component_1 = require("./bin-processing.component");
exports.BinRoutes = [
    { path: 'bin-collections', component: bin_collection_list_component_1.BinCollectionListComponent },
    { path: 'bin-collection/:id', component: bin_collection_detail_component_1.BinCollectionDetailComponent },
    { path: 'bin-processing', component: bin_processing_component_1.BinProcessingComponent }
];
exports.BinRouting = router_1.RouterModule.forChild(exports.BinRoutes);
//# sourceMappingURL=bin.routing.js.map