"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var personal_routing_1 = require('./personal.routing');
var ver_empleado_module_1 = require("./+ver-empleado/ver.empleado.module");
var busqueda_empleado_module_1 = require("./+busqueda-empleado/busqueda.empleado.module");
var empleado_service_1 = require("./+empleado/empleado.service");
var empleado_module_1 = require("./+empleado/empleado.module");
var busqueda_permisos_module_1 = require("./+permisos/busqueda.permisos.module");
var administrar_permiso_module_1 = require("./+administrar-permisos/administrar.permiso.module");
//CARGO
var cargo_module_1 = require('./+cargo/cargo.module');
var http_empleados_service_1 = require('./+cargo/http-empleados-service');
//Historia Laboral
var historiaLaboral_module_1 = require('./+historiaLaboral/historiaLaboral.module');
var http_historiaLaboral_service_1 = require('./+historiaLaboral/http-historiaLaboral-service');
var cargo_edit_module_1 = require('./+edit-cargo/cargo-edit.module');
//Notification
var notification_service_1 = require('./+utils/notification.service');
var PersonalModule = (function () {
    function PersonalModule() {
    }
    PersonalModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                personal_routing_1.personalRouting,
                busqueda_permisos_module_1.BusquedaPermisosModule,
                busqueda_empleado_module_1.BusquedaEmpleadoModule,
                ver_empleado_module_1.VerEmpleadoModule,
                empleado_module_1.EmpleadoModule,
                administrar_permiso_module_1.AdministrarPermisoModule,
                cargo_edit_module_1.CargoEditModule,
                historiaLaboral_module_1.HistoriaLaboralModule,
                cargo_module_1.CargoModule
            ],
            providers: [
                empleado_service_1.EmpleadoService,
                http_empleados_service_1.CargoService,
                http_historiaLaboral_service_1.HistoriaLaboralService,
                notification_service_1.NotificationService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], PersonalModule);
    return PersonalModule;
}());
exports.PersonalModule = PersonalModule;
//# sourceMappingURL=personal.module.js.map