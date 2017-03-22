"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var client_list_component_1 = require("./client-list.component");
var client_detail_component_1 = require("./client-detail.component");
exports.clientRoutes = [
    { path: 'clients', component: client_list_component_1.ClientListComponent },
    { path: 'client/:id', component: client_detail_component_1.ClientDetailComponent },
];
exports.clientRouting = router_1.RouterModule.forChild(exports.clientRoutes);
//# sourceMappingURL=client.routing.js.map