"use strict";
var router_1 = require('@angular/router');
var app_layouts_component_1 = require('./app-layouts/app-layouts.component');
var prebuilt_skins_component_1 = require('./prebuilt-skins/prebuilt-skins.component');
exports.routes = [
    { path: '', redirectTo: 'app-layouts', pathMatch: 'full' },
    { path: 'app-layouts', component: app_layouts_component_1.AppLayoutsComponent },
    { path: 'prebuilt-skins', component: prebuilt_skins_component_1.PrebuiltSkinsComponent }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=smartadmin-intel.routing.js.map