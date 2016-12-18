"use strict";
var router_1 = require("@angular/router");
var busqueda_empleado_component_1 = require("./+busqueda-empleado/busqueda.empleado.component");
var ver_empleado_component_1 = require("./+ver-empleado/ver.empleado.component");
var empleado_component_1 = require("./+empleado/empleado.component");
var busqueda_permisos_component_1 = require("./+permisos/busqueda.permisos.component");
var administrar_permiso_component_1 = require("./+administrar-permisos/administrar.permiso.component");
var cargo_component_1 = require('./+cargo/cargo.component');
var historiaLaboral_component_1 = require('./+historiaLaboral/historiaLaboral.component');
var cargo_edit_component_1 = require('./+edit-cargo/cargo-edit.component');
exports.personalRoutes = [
    {
        path: '',
        redirectTo: 'busquedaEmpleado',
        pathMatch: 'full'
    },
    {
        path: 'busquedaEmpleado',
        component: busqueda_empleado_component_1.BusquedaEmpleadoComponent
    },
    {
        path: 'busquedaPermisos',
        component: busqueda_permisos_component_1.BusquedaPermisosComponent
    },
    {
        path: 'administrarPermiso',
        component: administrar_permiso_component_1.AdministrarPermisoComponent
    },
    {
        path: 'verEmpleado',
        component: ver_empleado_component_1.VerEmpleadoComponent
    },
    {
        path: 'empleado',
        component: empleado_component_1.EmpleadoComponent
    },
    {
        path: 'historiaLaboral',
        component: historiaLaboral_component_1.HistoriaLaboralComponent
    },
    {
        path: 'editarCargo',
        component: cargo_edit_component_1.EditCargoComponent
    },
    {
        path: 'nuevoCargo',
        component: cargo_component_1.CargoComponent
    }
];
exports.personalRouting = router_1.RouterModule.forChild(exports.personalRoutes);
//# sourceMappingURL=personal.routing.js.map