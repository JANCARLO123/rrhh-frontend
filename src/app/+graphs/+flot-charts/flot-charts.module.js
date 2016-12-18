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
var flot_charts_routing_1 = require('./flot-charts.routing');
var flot_charts_component_1 = require('./flot-charts.component');
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var flot_chart_module_1 = require("../../shared/graphs/flot-chart/flot-chart.module");
var FlotChartsModule = (function () {
    function FlotChartsModule() {
    }
    FlotChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flot_charts_routing_1.flotChartsRouting,
                smartadmin_module_1.SmartadminModule,
                flot_chart_module_1.FlotChartModule
            ],
            declarations: [flot_charts_component_1.FlotChartsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FlotChartsModule);
    return FlotChartsModule;
}());
exports.FlotChartsModule = FlotChartsModule;
//# sourceMappingURL=flot-charts.module.js.map