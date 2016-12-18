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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var cargo_routing_1 = require('./cargo.routing');
var cargo_component_1 = require("./cargo.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var runakuna_datatable_module_1 = require("../../shared/ui/datatable/runakuna-datatable.module");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var kendo_angular_dropdowns_1 = require('@progress/kendo-angular-dropdowns');
var forms_1 = require('@angular/forms');
var horario_dialog_component_1 = require("./horario.dialog.component");
var kendo_angular_dialog_1 = require('@progress/kendo-angular-dialog');
var kendo_angular_grid_1 = require('@progress/kendo-angular-grid');
var http_empleados_service_1 = require('./http-empleados-service');
var CargoModule = (function () {
    function CargoModule() {
    }
    CargoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                smartadmin_input_module_1.SmartadminInputModule,
                cargo_routing_1.cargoRouting,
                kendo_angular_grid_1.GridModule,
                kendo_angular_dialog_1.DialogModule,
                runakuna_datatable_module_1.RunakunaDatatableModule,
                smartadmin_module_1.SmartadminModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [cargo_component_1.CargoComponent, horario_dialog_component_1.HorarioDialogFormComponent],
            providers: [
                http_empleados_service_1.CargoService
            ],
            bootstrap: [cargo_component_1.CargoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CargoModule);
    return CargoModule;
}());
exports.CargoModule = CargoModule;
//# sourceMappingURL=cargo.module.js.map