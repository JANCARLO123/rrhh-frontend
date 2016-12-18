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
var morris_charts_routing_1 = require('./morris-charts.routing');
var morris_charts_component_1 = require('./morris-charts.component');
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var morris_graph_module_1 = require("../../shared/graphs/morris-graph/morris-graph.module");
var MorrisChartsModule = (function () {
    function MorrisChartsModule() {
    }
    MorrisChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                morris_charts_routing_1.morrisChartsRouting,
                smartadmin_module_1.SmartadminModule,
                morris_graph_module_1.MorrisGraphModule
            ],
            declarations: [morris_charts_component_1.MorrisChartsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MorrisChartsModule);
    return MorrisChartsModule;
}());
exports.MorrisChartsModule = MorrisChartsModule;
//# sourceMappingURL=morris-charts.module.js.map