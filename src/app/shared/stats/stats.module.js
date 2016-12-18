"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var stats_component_1 = require("./stats.component");
var inline_graphs_module_1 = require("../graphs/inline/inline-graphs.module");
var StatsModule = (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, inline_graphs_module_1.InlineGraphsModule],
            declarations: [stats_component_1.StatsComponent],
            exports: [stats_component_1.StatsComponent],
        })
    ], StatsModule);
    return StatsModule;
}());
exports.StatsModule = StatsModule;
