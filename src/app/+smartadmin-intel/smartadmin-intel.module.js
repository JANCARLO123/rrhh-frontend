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
var smartadmin_intel_routing_1 = require('./smartadmin-intel.routing');
var app_layouts_component_1 = require('./app-layouts/app-layouts.component');
var prebuilt_skins_component_1 = require("./prebuilt-skins/prebuilt-skins.component");
var SmartadminIntelModule = (function () {
    function SmartadminIntelModule() {
    }
    SmartadminIntelModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_layouts_component_1.AppLayoutsComponent,
                prebuilt_skins_component_1.PrebuiltSkinsComponent
            ],
            imports: [
                smartadmin_intel_routing_1.routing
            ],
            entryComponents: [app_layouts_component_1.AppLayoutsComponent, prebuilt_skins_component_1.PrebuiltSkinsComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], SmartadminIntelModule);
    return SmartadminIntelModule;
}());
exports.SmartadminIntelModule = SmartadminIntelModule;
//# sourceMappingURL=smartadmin-intel.module.js.map