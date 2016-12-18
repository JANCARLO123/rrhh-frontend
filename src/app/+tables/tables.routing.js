"use strict";
var router_1 = require("@angular/router");
var normal_tables_component_1 = require("./+normal-tables/normal-tables.component");
var datatables_showcase_component_1 = require("./+datatables-showcase/datatables-showcase.component");
exports.routes = [
    {
        path: 'normal',
        component: normal_tables_component_1.NormalTablesComponent,
        data: { pageTitle: 'Normal' }
    },
    {
        path: 'datatables',
        component: datatables_showcase_component_1.DatatablesShowcaseComponent,
        data: { pageTitle: 'Datatables' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=tables.routing.js.map