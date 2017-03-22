"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Auth } from './auth.service';
//import { AuthGuard } from './auth-guard.service';
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var shared_module_1 = require("./shared/shared.module");
//import { ToastyService, ToastyConfig } from 'ng2-toasty';
var app_routing_1 = require("./app.routing");
var trim_pipe_1 = require("./shared/trim.pipe");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
/* Feature Modules */
var maintenance_module_1 = require("./maintenance/maintenance.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.routing,
            maintenance_module_1.MaintenanceModule
        ],
        declarations: [
            trim_pipe_1.TrimPipe,
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
        ],
        //providers: [ AUTH_PROVIDERS, Auth, AuthGuard ], //, ToastyService, ToastyConfig ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map