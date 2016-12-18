"use strict";
var router_1 = require('@angular/router');
var historiaLaboral_component_1 = require('./historiaLaboral.component');
var cargo_edit_component_1 = require('../+edit-cargo/cargo-edit.component');
exports.historiaLaboralRoutes = [
    {
        path: '',
        component: historiaLaboral_component_1.HistoriaLaboralComponent
    },
    {
        path: 'editarCargo',
        component: cargo_edit_component_1.EditCargoComponent
    }
];
exports.historiaLaboralRouting = router_1.RouterModule.forChild(exports.historiaLaboralRoutes);
//export const historiaLaboralRouting = RouterModule.forChild(historiaLaboralRoutes); 
//# sourceMappingURL=historiaLaboral.routing.js.map