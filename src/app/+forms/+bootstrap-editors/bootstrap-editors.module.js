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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var bootstrap_editors_component_1 = require('./bootstrap-editors.component');
var bootstrap_editors_routing_1 = require("./bootstrap-editors.routing");
var smartadmin_editors_module_1 = require("../../shared/forms/editors/smartadmin-editors.module");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var BootstrapEditorsModule = (function () {
    function BootstrapEditorsModule() {
    }
    BootstrapEditorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                bootstrap_editors_routing_1.bootstrapEditorsRouting,
                smartadmin_editors_module_1.SmartadminEditorsModule,
                smartadmin_module_1.SmartadminModule,
            ],
            declarations: [bootstrap_editors_component_1.BootstrapEditorsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapEditorsModule);
    return BootstrapEditorsModule;
}());
exports.BootstrapEditorsModule = BootstrapEditorsModule;
//# sourceMappingURL=bootstrap-editors.module.js.map