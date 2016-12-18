"use strict";
var router_1 = require('@angular/router');
var social_1 = require('./social');
var analytics_1 = require('./analytics');
exports.routes = [
    { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    { path: 'social', component: social_1.SocialComponent, data: { pageTitle: 'Social' } },
    { path: 'analytics', component: analytics_1.AnalyticsComponent, data: { pageTitle: 'Analytics' } }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=dashboard.routing.js.map