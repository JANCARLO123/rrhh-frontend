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
/**
 * Created by josediaz on 31/10/2016.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var importEmpleado_1 = require("./importEmpleado");
var GridEditFormComponent = (function () {
    function GridEditFormComponent() {
        this.uploadSaveUrl = "http://localhost:7999/empleado/importarArchivoEmpleados";
        this.uploadRemoveUrl = "http://localhost:7999/empleado/eliminarArchivoEmpleados";
        this.uploadValidation = { allowedExtensions: [".xls", ".xlsx"] };
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.titulo = "";
        this.contenidoArchivo = "";
        this.contentTypeArchivo = "";
        this.editForm = new forms_1.FormGroup({
            'Archivo': new forms_1.FormControl()
        });
    }
    Object.defineProperty(GridEditFormComponent.prototype, "model", {
        set: function (dto) {
            this.importEmpleado = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
        },
        enumerable: true,
        configurable: true
    });
    GridEditFormComponent.prototype.onSuccessUpload = function (event) {
        debugger;
        var file = event.response.json();
        var fileName = file.fileDocName;
        var url = 'http://localhost:7999/empleado/templateEmpleadosProcess';
        url = url + '?docname=' + fileName;
        if ($("#export_file").length > 0) {
            $("#export_file").remove();
        }
        if ($("#export_file").length === 0) {
            var el = document.createElement("iframe");
            document.body.appendChild(el);
            $(el).hide();
            $(el).attr("id", "export_file");
            $(el).attr("src", url);
        }
        $("#importCloseWnd").trigger("click");
    };
    GridEditFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        debugger;
        if (this.importEmpleado === undefined)
            this.importEmpleado = new importEmpleado_1.ImportEmpleado(this.contenidoArchivo, '', '');
        else {
            this.importEmpleado.contenidoArchivo = this.contenidoArchivo;
            this.importEmpleado.tipoArchivo = this.contentTypeArchivo;
        }
        this.save.emit(this.importEmpleado);
        this.active = false;
        this.lgModal.hide();
    };
    GridEditFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    GridEditFormComponent.prototype.onClose = function () {
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    GridEditFormComponent.prototype.importarArchivoEmpleados = function () {
        this.model = new importEmpleado_1.ImportEmpleado();
        this.contenidoArchivo = "";
        this.contentTypeArchivo = "";
        this.active = true;
        this.lgModal.show();
    };
    GridEditFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    GridEditFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    GridEditFormComponent.prototype.descargarTemplateFormat = function () {
        var url = 'http://localhost:7999/empleado/descargarTemplateEmpleados';
        if ($("#export_file").length > 0) {
            $("#export_file").remove();
        }
        if ($("#export_file").length === 0) {
            var el = document.createElement("iframe");
            document.body.appendChild(el);
            $(el).hide();
            $(el).attr("id", "export_file");
            $(el).attr("src", url);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', importEmpleado_1.ImportEmpleado), 
        __metadata('design:paramtypes', [importEmpleado_1.ImportEmpleado])
    ], GridEditFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridEditFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridEditFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], GridEditFormComponent.prototype, "lgModal", void 0);
    GridEditFormComponent = __decorate([
        core_1.Component({
            selector: 'kendo-grid-empleados-form',
            template: "\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">Importar Empleados</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n            <section class=\"col-12 text-center\"> \n                <button (click)=\"descargarTemplateFormat()\" class=\"btn btn-primary\"><i class=\"fa fa-plus\"></i>\n                    Descargar Formato\n                </button>\n            </section>\n       \n          <form [formGroup]=\"editForm\" class=\"smart-form\" >\n            \n            <div class=\"row\">\n                \n                 <section class=\"col col-md-12\">\n                  <label for=\"Nombre\">Archivo</label>\n                  <label class=\"input\"> \n                        <kendo-upload [saveUrl]=\"uploadSaveUrl\" [removeUrl]=\"uploadRemoveUrl\" [multiple]=\"false\"  [validation]=\"uploadValidation\" (success)=\"onSuccessUpload($event)\"></kendo-upload>\n                  </label>\n                 </section>\n            </div>\n          </form>\n          \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" id=\"importCloseWnd\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n          </div>\n          \n          </div>\n    </div>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridEditFormComponent);
    return GridEditFormComponent;
}());
exports.GridEditFormComponent = GridEditFormComponent;
//# sourceMappingURL=grid.edit.empleados.component.js.map