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
var historiaLaboral_routing_1 = require('./historiaLaboral.routing');
var historiaLaboral_component_1 = require("./historiaLaboral.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var runakuna_datatable_module_1 = require("../../shared/ui/datatable/runakuna-datatable.module");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var kendo_angular_dropdowns_1 = require('@progress/kendo-angular-dropdowns');
var kendo_angular_dialog_1 = require('@progress/kendo-angular-dialog');
var kendo_angular_grid_1 = require('@progress/kendo-angular-grid');
var kendo_angular_buttons_1 = require('@progress/kendo-angular-buttons');
var http_historiaLaboral_service_1 = require('./http-historiaLaboral-service');
var forms_1 = require('@angular/forms');
var jquery_ui_module_1 = require("../../shared/ui/jquery-ui/jquery-ui.module");
var cargo_edit_module_1 = require('../+edit-cargo/cargo-edit.module');
var HistoriaLaboralModule = (function () {
    function HistoriaLaboralModule() {
    }
    HistoriaLaboralModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                smartadmin_validation_module_1.SmartadminValidationModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                smartadmin_input_module_1.SmartadminInputModule,
                historiaLaboral_routing_1.historiaLaboralRouting,
                kendo_angular_grid_1.GridModule,
                kendo_angular_dialog_1.DialogModule,
                kendo_angular_buttons_1.ButtonsModule,
                runakuna_datatable_module_1.RunakunaDatatableModule,
                smartadmin_module_1.SmartadminModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                jquery_ui_module_1.JqueryUiModule,
                cargo_edit_module_1.CargoEditModule
            ],
            declarations: [historiaLaboral_component_1.HistoriaLaboralComponent],
            providers: [
                http_historiaLaboral_service_1.HistoriaLaboralService
            ],
            bootstrap: [historiaLaboral_component_1.HistoriaLaboralComponent],
            entryComponents: [historiaLaboral_component_1.HistoriaLaboralComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], HistoriaLaboralModule);
    return HistoriaLaboralModule;
}());
exports.HistoriaLaboralModule = HistoriaLaboralModule;
//# sourceMappingURL=historiaLaboral.module.js.map