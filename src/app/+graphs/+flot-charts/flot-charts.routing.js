"use strict";
var router_1 = require('@angular/router');
var flot_charts_component_1 = require("./flot-charts.component");
exports.flotChartsRoutes = [
    {
        path: '',
        component: flot_charts_component_1.FlotChartsComponent
    },
];
exports.flotChartsRouting = router_1.RouterModule.forChild(exports.flotChartsRoutes);
//# sourceMappingURL=flot-charts.routing.js.map