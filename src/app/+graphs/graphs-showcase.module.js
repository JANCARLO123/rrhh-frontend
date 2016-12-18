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
var smartadmin_module_1 = require('../shared/smartadmin.module');
var sparklines_component_1 = require("./+sparklines/sparklines.component");
var easy_pie_charts_component_1 = require("./+easy-pie-charts/easy-pie-charts.component");
var graphs_showcase_routing_1 = require('./graphs-showcase.routing');
var GraphsShowcaseModule = (function () {
    function GraphsShowcaseModule() {
    }
    GraphsShowcaseModule = __decorate([
        core_1.NgModule({
            declarations: [
                sparklines_component_1.SparklinesComponent,
                easy_pie_charts_component_1.EasyPieChartsComponent,
            ],
            imports: [
                smartadmin_module_1.SmartadminModule,
                graphs_showcase_routing_1.routing
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], GraphsShowcaseModule);
    return GraphsShowcaseModule;
}());
exports.GraphsShowcaseModule = GraphsShowcaseModule;
//# sourceMappingURL=graphs-showcase.module.js.map