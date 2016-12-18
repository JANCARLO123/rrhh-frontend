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
var busqueda_permisos_component_1 = require("./busqueda.permisos.component");
var grid_edit_permisos_component_1 = require("./grid.edit.permisos.component");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var smartadmin_validation_module_1 = require("../../shared/forms/validation/smartadmin-validation.module");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var runakuna_datatable_module_1 = require("../../shared/ui/datatable/runakuna-datatable.module");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var http_1 = require("@angular/http");
var kendo_angular_upload_1 = require("@progress/kendo-angular-upload");
var forms_1 = require("@angular/forms");
var jquery_ui_module_1 = require("../../shared/ui/jquery-ui/jquery-ui.module");
var ng2_auto_complete_1 = require('ng2-auto-complete');
var ng2_completer_1 = require("ng2-completer");
/**
 * Created by josediaz on 8/11/2016.
 */
var BusquedaPermisosModule = (function () {
    function BusquedaPermisosModule() {
    }
    BusquedaPermisosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                smartadmin_validation_module_1.SmartadminValidationModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                smartadmin_input_module_1.SmartadminInputModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_dialog_1.DialogModule,
                runakuna_datatable_module_1.RunakunaDatatableModule,
                smartadmin_module_1.SmartadminModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                kendo_angular_upload_1.UploadModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                jquery_ui_module_1.JqueryUiModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
                ng2_completer_1.Ng2CompleterModule
            ],
            declarations: [busqueda_permisos_component_1.BusquedaPermisosComponent, grid_edit_permisos_component_1.GridEditFormComponent],
            bootstrap: [busqueda_permisos_component_1.BusquedaPermisosComponent],
            entryComponents: [busqueda_permisos_component_1.BusquedaPermisosComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], BusquedaPermisosModule);
    return BusquedaPermisosModule;
}());
exports.BusquedaPermisosModule = BusquedaPermisosModule;
//# sourceMappingURL=busqueda.permisos.module.js.map