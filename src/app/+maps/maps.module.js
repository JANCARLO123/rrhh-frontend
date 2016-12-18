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
var core_1 = require("@angular/core");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var maps_component_1 = require("./maps.component");
var map_style_service_1 = require("./shared/map-style.service");
var google_api_service_1 = require("./shared/google-api.service");
var maps_routing_1 = require("./maps.routing");
var MapsModule = (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [maps_routing_1.routing, smartadmin_module_1.SmartadminModule],
            declarations: [maps_component_1.MapsComponent],
            exports: [maps_component_1.MapsComponent],
            providers: [google_api_service_1.GoogleAPIService, map_style_service_1.MapStyleService],
        }), 
        __metadata('design:paramtypes', [])
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map