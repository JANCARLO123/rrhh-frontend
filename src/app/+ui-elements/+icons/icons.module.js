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
var icons_routing_1 = require('./icons.routing');
var font_awesome_component_1 = require("./+font-awesome/font-awesome.component");
var flags_component_1 = require("./+flags/flags.component");
var glyphicons_component_1 = require("./+glyphicons/glyphicons.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var IconsModule = (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                icons_routing_1.iconsRouting,
                smartadmin_module_1.SmartadminModule
            ],
            declarations: [flags_component_1.FlagsComponent, font_awesome_component_1.FontAwesomeComponent, glyphicons_component_1.GlyphiconsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map