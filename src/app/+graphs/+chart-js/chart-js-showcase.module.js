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
var chart_js_showcase_routing_1 = require('./chart-js-showcase.routing');
var chart_js_showcase_component_1 = require('./chart-js-showcase.component');
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var chart_js_module_1 = require("../../shared/graphs/chart-js/chart-js.module");
var ChartJsShowcaseModule = (function () {
    function ChartJsShowcaseModule() {
    }
    ChartJsShowcaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                chart_js_showcase_routing_1.chartJsShowcaseRouting,
                smartadmin_module_1.SmartadminModule,
                chart_js_module_1.ChartJsModule,
            ],
            declarations: [chart_js_showcase_component_1.ChartJsShowcaseComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartJsShowcaseModule);
    return ChartJsShowcaseModule;
}());
exports.ChartJsShowcaseModule = ChartJsShowcaseModule;
//# sourceMappingURL=chart-js-showcase.module.js.map