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
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require("ng2-bootstrap");
var documentoEmpleado_1 = require("./documentoEmpleado");
var environment_1 = require("../../../environments/environment");
var GridEditFormComponent = (function () {
    function GridEditFormComponent() {
        this.localhost = environment_1.environment.backend;
        this.port = environment_1.environment.port;
        this.uploadSaveUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/cargarArchivoDocumento';
        this.uploadRemoveUrl = 'http://' + this.localhost + ':' + this.port + '/empleado/eliminarArchivoDocumento';
        this.uploadValidation = { allowedExtensions: [".doc", ".docx", ".pdf", ".jpg", ".png"] };
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.titulo = "";
        this.nombreDocumento = "";
        this.contenidoArchivo = "";
        this.nombreArchivo = "";
        this.contentTypeArchivo = "";
        this.editForm = new forms_1.FormGroup({
            'Nombre': new forms_1.FormControl(),
            'Archivo': new forms_1.FormControl()
        });
    }
    Object.defineProperty(GridEditFormComponent.prototype, "model", {
        set: function (dto) {
            this.documentoEmpleado = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
        },
        enumerable: true,
        configurable: true
    });
    GridEditFormComponent.prototype.onSuccessUpload = function (event) {
        var file = event.response.json();
        this.contenidoArchivo = file.content;
        this.nombreArchivo = file.name;
        this.contentTypeArchivo = file.contentType;
    };
    GridEditFormComponent.prototype.ingresaDocumento = function () {
        $('#documento').parent().removeClass('state-error');
    };
    GridEditFormComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.nombreDocumento === undefined || this.nombreDocumento == null || this.nombreDocumento == '') {
            $('#documento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    GridEditFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        debugger;
        if (this.documentoEmpleado === undefined)
            this.documentoEmpleado = new documentoEmpleado_1.DocumentoEmpleado(undefined, this.nombreDocumento, this.contenidoArchivo, '', '');
        else {
            this.documentoEmpleado.nombre = this.nombreDocumento;
            this.documentoEmpleado.contenidoArchivo = this.contenidoArchivo;
            this.documentoEmpleado.nombreArchivo = this.nombreArchivo;
            this.documentoEmpleado.tipoArchivo = this.contentTypeArchivo;
        }
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message-documentos').dialog("open");
            return;
        }
        this.save.emit(this.documentoEmpleado);
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
    GridEditFormComponent.prototype.agregarDocumento = function () {
        this.model = new documentoEmpleado_1.DocumentoEmpleado();
        this.nombreDocumento = "";
        this.contenidoArchivo = "";
        this.nombreArchivo = "";
        this.contentTypeArchivo = "";
        $('#documento').parent().removeClass('state-error');
        this.active = true;
        this.lgModal.show();
    };
    GridEditFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    GridEditFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    GridEditFormComponent.prototype.cerrarDialogDocumento = function () {
        this.mensaje = '';
        $('#dialog-message-documentos').dialog("close");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', documentoEmpleado_1.DocumentoEmpleado), 
        __metadata('design:paramtypes', [documentoEmpleado_1.DocumentoEmpleado])
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
            selector: 'kendo-grid-edit-form',
            template: "\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{titulo}}</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n          <form [formGroup]=\"editForm\" class=\"smart-form\">\n            \n            <div class=\"row\">\n            \n                <section class=\"col col-md-12\">\n                  <label for=\"Nombre\">Nombre</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"documento\" formControlName=\"Nombre\" [(ngModel)]=\"nombreDocumento\" (keyup)=\"ingresaDocumento()\" />\n                  </label>\n                 </section>\n                 \n                 <section class=\"col col-md-12\">\n                  <label for=\"Nombre\">Archivo</label>\n                  <label class=\"input\"> \n\n                        <kendo-upload [saveUrl]=\"uploadSaveUrl\" [removeUrl]=\"uploadRemoveUrl\" [multiple]=\"false\" [validation]=\"uploadValidation\" (success)=\"onSuccessUpload($event)\"></kendo-upload>\n\n                  </label>\n                 </section>\n            \n            </div>\n            \n            <div id=\"dialog-message-documentos\" [saJquiDialog]=\"{\n\t\t\t\t\t\t\t\tautoOpen: false,\n\t\t\t\t\t\t\t\tmodal: true,\n\t\t\t\t\t\t\t\tresizable: false\n\t\t\t\t\t\t\t  }\">\n\t\t\t\t\t\t<!-- dialog header // removing on compile-->\n\t\t\t\t\t\t<div data-dialog-title=\"\">\n\t\t\t\t\t\t\t<div class=\"widget-header\"><h4><i class=\"icon-ok\"></i> Informacion</h4></div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{mensaje}}\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<div class=\"hr hr-12 hr-double\"></div>\n\n\t\t\t\t\t\t<div data-dialog-buttons=\"\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"cerrarDialogDocumento()\"><i class=\"fa fa-check\"></i>&nbsp;OK</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n            \n          </form>\n          \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n            </button>\n          </div>\n          \n          </div>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], GridEditFormComponent);
    return GridEditFormComponent;
}());
exports.GridEditFormComponent = GridEditFormComponent;
//# sourceMappingURL=grid.edit.form.component.js.map