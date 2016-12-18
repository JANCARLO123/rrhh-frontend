/**
 * Created by josediaz on 28/10/2016.
 */
"use strict";
var router_1 = require("@angular/router");
var ver_empleado_component_1 = require("../+ver-empleado/ver.empleado.component");
exports.busquedaEmpleadoRoutes = [
    {
        path: '',
        redirectTo: 'busquedaEmpleado',
        pathMatch: 'full'
    },
    {
        path: 'verEmpleado',
        component: ver_empleado_component_1.VerEmpleadoComponent
    }
];
exports.BusquedaEmpleadoRouting = router_1.RouterModule.forChild(exports.busquedaEmpleadoRoutes);
//# sourceMappingURL=busqueda.empleado.routing.js.map