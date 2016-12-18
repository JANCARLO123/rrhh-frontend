"use strict";
var router_1 = require("@angular/router");
var outlook_component_1 = require("./outlook.component");
var folder_component_1 = require("./folder/folder.component");
var details_component_1 = require("./details/details.component");
var replay_component_1 = require("./replay/replay.component");
var compose_component_1 = require("./compose/compose.component");
exports.routes = [
    {
        path: '',
        component: outlook_component_1.OutlookComponent,
        children: [
            {
                path: '',
                redirectTo: 'inbox',
                pathMatch: 'full'
            },
            {
                path: 'details/:id',
                component: details_component_1.DetailsComponent
            },
            {
                path: 'reply/:id',
                component: replay_component_1.ReplayComponent
            },
            {
                path: 'compose',
                component: compose_component_1.ComposeComponent
            },
            {
                path: ':folder',
                component: folder_component_1.FolderComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=outlook.routing.js.map