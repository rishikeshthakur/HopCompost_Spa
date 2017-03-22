"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contract_detail_component_1 = require("./contract-detail.component");
var router_1 = require("@angular/router");
var client_list_component_1 = require("./client-list.component");
var client_detail_component_1 = require("./client-detail.component");
exports.clientRoutes = [
    { path: 'clients', component: client_list_component_1.ClientListComponent },
    { path: 'client/:id', component: client_detail_component_1.ClientDetailComponent },
    { path: 'contract/:clientId/:id', component: contract_detail_component_1.ContractDetailComponent },
];
exports.clientRouting = router_1.RouterModule.forChild(exports.clientRoutes);
//# sourceMappingURL=client.routing.js.map