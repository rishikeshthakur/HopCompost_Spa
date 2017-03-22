"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_service_1 = require("./utility.service");
var moment_pipe_1 = require("./moment.pipe");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
//import { ToastyModule } from 'ng2-toasty';
var angular2_busy_1 = require("angular2-busy");
var page_component_1 = require("./page.component");
var shorten_component_1 = require("./shorten.component");
var format_service_1 = require("./format.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            //ToastyModule.forRoot(),
            angular2_busy_1.BusyModule.forRoot(new angular2_busy_1.BusyConfig({
                message: 'Processing...'
            }))
        ],
        exports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            //ToastyModule,
            angular2_busy_1.BusyModule,
            page_component_1.PageComponent,
            shorten_component_1.ShortenComponent,
            moment_pipe_1.MomentPipe
        ],
        declarations: [
            page_component_1.PageComponent,
            shorten_component_1.ShortenComponent,
            moment_pipe_1.MomentPipe
        ],
        providers: [
            format_service_1.FormatService,
            utility_service_1.UtilityService
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map