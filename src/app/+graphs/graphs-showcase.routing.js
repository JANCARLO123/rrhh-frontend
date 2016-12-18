"use strict";
var router_1 = require('@angular/router');
var sparklines_component_1 = require("./+sparklines/sparklines.component");
var easy_pie_charts_component_1 = require("./+easy-pie-charts/easy-pie-charts.component");
exports.routes = [
    {
        path: 'flot-charts',
        loadChildren: 'app/+graphs/+flot-charts/flot-charts.module#FlotChartsModule'
    },
    {
        path: 'morris-charts',
        loadChildren: 'app/+graphs/+morris-charts/morris-charts.module#MorrisChartsModule'
    },
    {
        path: 'sparklines',
        component: sparklines_component_1.SparklinesComponent
    },
    {
        path: 'easy-pie-charts',
        component: easy_pie_charts_component_1.EasyPieChartsComponent
    },
    {
        path: 'dygraphs',
        loadChildren: 'app/+graphs/+dygraphs/dygraphs.module#DygraphsModule'
    },
    {
        path: 'chart-js',
        loadChildren: 'app/+graphs/+chart-js/chart-js-showcase.module#ChartJsShowcaseModule'
    },
    {
        path: 'highchart-tables',
        loadChildren: 'app/+graphs/+highchart-tables/highchart-tables.module#HighchartTablesModule'
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=graphs-showcase.routing.js.map