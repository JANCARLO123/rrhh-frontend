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
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var runakuna_datatable_module_1 = require("../../shared/ui/datatable/runakuna-datatable.module");
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var kendo_angular_buttons_1 = require('@progress/kendo-angular-buttons');
var kendo_angular_grid_1 = require('@progress/kendo-angular-grid');
var kendo_angular_dialog_1 = require('@progress/kendo-angular-dialog');
var kendo_angular_upload_1 = require('@progress/kendo-angular-upload');
var kendo_angular_dropdowns_1 = require('@progress/kendo-angular-dropdowns');
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var empleado_component_1 = require("./empleado.component");
var grid_edit_form_component_1 = require("./grid.edit.form.component");
var educacion_dialog_component_1 = require("./educacion.dialog.component");
var experienciaLaboral_dialog_component_1 = require("./experienciaLaboral.dialog.component");
var equipoEntregado_dialog_component_1 = require("./equipoEntregado.dialog.component");
var foto_form_component_1 = require("./foto.form.component");
var jquery_ui_module_1 = require("../../shared/ui/jquery-ui/jquery-ui.module");
var EmpleadoModule = (function () {
    function EmpleadoModule() {
    }
    EmpleadoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //empleadoRouting,
                runakuna_datatable_module_1.RunakunaDatatableModule,
                smartadmin_module_1.SmartadminModule,
                kendo_angular_buttons_1.ButtonsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_dialog_1.DialogModule,
                kendo_angular_upload_1.UploadModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                smartadmin_input_module_1.SmartadminInputModule,
                jquery_ui_module_1.JqueryUiModule
            ],
            declarations: [empleado_component_1.EmpleadoComponent, grid_edit_form_component_1.GridEditFormComponent, educacion_dialog_component_1.EducacionDialogFormComponent, experienciaLaboral_dialog_component_1.ExperienciaLaboralDialogFormComponent, equipoEntregado_dialog_component_1.EquipoEntregadoDialogFormComponent, foto_form_component_1.FotoFormComponent],
            bootstrap: [empleado_component_1.EmpleadoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], EmpleadoModule);
    return EmpleadoModule;
}());
exports.EmpleadoModule = EmpleadoModule;
//# sourceMappingURL=empleado.module.js.map