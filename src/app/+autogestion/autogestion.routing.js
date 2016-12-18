"use strict";
var router_1 = require("@angular/router");
var permiso_component_1 = require("./+solicitar-permiso/permiso.component");
exports.autogestionRoutes = [
    {
        path: '',
        redirectTo: 'solicitarPermiso',
        pathMatch: 'full'
    },
    {
        path: 'solicitarPermiso',
        component: permiso_component_1.PermisoComponent
    }
];
exports.autogestionRouting = router_1.RouterModule.forChild(exports.autogestionRoutes);
//# sourceMappingURL=autogestion.routing.js.map