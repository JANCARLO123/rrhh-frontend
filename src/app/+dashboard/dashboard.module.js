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
var dashboard_routing_1 = require('./dashboard.routing');
var analytics_component_1 = require('./analytics/analytics.component');
var social_component_1 = require('./social/social.component');
var social_network_component_1 = require("./analytics/live-feeds/social-network.component");
var live_feeds_component_1 = require("./analytics/live-feeds/live-feeds.component");
var live_stats_component_1 = require("./analytics/live-feeds/live-stats.component");
var revenue_component_1 = require("./analytics/live-feeds/revenue.component");
var bird_eye_component_1 = require('./analytics/bird-eye/bird-eye.component');
var calendar_module_1 = require("../+calendar/calendar.module");
var todo_widget_component_1 = require('./analytics/todo-widget/todo-widget.component');
var todo_list_component_1 = require('./analytics/todo-widget/todo-list.component');
var flot_chart_module_1 = require("../shared/graphs/flot-chart/flot-chart.module");
var vector_map_module_1 = require("../shared/graphs/vector-map/vector-map.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                smartadmin_module_1.SmartadminModule,
                dashboard_routing_1.routing,
                calendar_module_1.CalendarModule,
                flot_chart_module_1.FlotChartModule,
                vector_map_module_1.VectorMapModule,
            ],
            declarations: [
                social_component_1.SocialComponent,
                analytics_component_1.AnalyticsComponent,
                live_feeds_component_1.LiveFeedsComponent,
                live_stats_component_1.LiveStatsComponent,
                revenue_component_1.RevenueComponent,
                social_network_component_1.SocialNetworkComponent,
                bird_eye_component_1.BirdEyeComponent,
                todo_widget_component_1.TodoWidgetComponent,
                todo_list_component_1.TodoListComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map