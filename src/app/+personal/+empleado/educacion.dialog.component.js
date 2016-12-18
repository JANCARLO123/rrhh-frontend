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
var empleado_service_1 = require('./empleado.service');
var educacion_1 = require("./educacion");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var EducacionDialogFormComponent = (function () {
    function EducacionDialogFormComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.defaultItem = { codigo: null, nombre: 'Seleccionar' };
        this.active = false;
        this.tituloCabecera = "";
        this.editForm = new forms_1.FormGroup({
            'NivelEducacion': new forms_1.FormControl(),
            'Institucion': new forms_1.FormControl(),
            'FechaInicio': new forms_1.FormControl(),
            'FechaFin': new forms_1.FormControl(),
            'Titulo': new forms_1.FormControl(),
            'Descripcion': new forms_1.FormControl()
        });
    }
    Object.defineProperty(EducacionDialogFormComponent.prototype, "model", {
        set: function (dto) {
            this.dataItem = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
            ;
        },
        enumerable: true,
        configurable: true
    });
    EducacionDialogFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        for (var item in this.nivelesEducacion) {
            var data = this.nivelesEducacion[item];
            if (this.nivelEducacion === data.codigo) {
                this.nombreNivelEducacion = data.nombre;
                break;
            }
        }
        if (this.dataItem === undefined)
            this.dataItem = new educacion_1.Educacion(undefined, this.nivelEducacion, this.institucion, this.titulo, this.descripcion, this.fechaInicio, this.fechaFin, this.nombreNivelEducacion);
        else {
            this.dataItem.nivelEducacion = this.nivelEducacion;
            this.dataItem.institucion = this.institucion;
            this.dataItem.titulo = this.titulo;
            this.dataItem.descripcion = this.descripcion;
            this.dataItem.fechaInicio = this.fechaInicio;
            this.dataItem.fechaFin = this.fechaFin;
            this.dataItem.nombreNivelEducacion = this.nombreNivelEducacion;
        }
        this.save.emit(this.dataItem);
        this.active = false;
        this.lgModal.hide();
    };
    EducacionDialogFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    EducacionDialogFormComponent.prototype.onClose = function () {
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    EducacionDialogFormComponent.prototype.agregarEducacion = function () {
        this.obtenerNivelEducacion();
        this.model = new educacion_1.Educacion();
        this.nivelEducacion = "";
        this.institucion = "";
        this.titulo = "";
        this.descripcion = "";
        this.fechaInicio = "";
        this.fechaFin = "";
        this.nombreNivelEducacion = "";
        $('#empresa').parent().removeClass('state-error');
        $('#departamento').parent().removeClass('state-error');
        $('#fechaInicio').parent().removeClass('state-error');
        this.active = true;
        this.lgModal.show();
    };
    EducacionDialogFormComponent.prototype.ingresaInstitucion = function () {
        $('#institucion').removeClass('state-error');
        $('#institucion').parent().removeClass('state-error');
    };
    EducacionDialogFormComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.nivelEducacion === undefined || this.nivelEducacion == null || this.nivelEducacion == '') {
            $('#nivelEducacion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.institucion === undefined || this.institucion == null || this.institucion == '') {
            $('#institucion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.fechaInicio === undefined || this.fechaInicio == null || this.fechaInicio == '') {
            $('#fechaInicio').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    EducacionDialogFormComponent.prototype.obtenerNivelEducacion = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerNivelEducacion').subscribe(function (tablaGeneralDto) { return _this.nivelesEducacion = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EducacionDialogFormComponent.prototype.onChangeDateInicio = function (value) {
        this.fechaInicio = value;
        $('#fechaInicio').removeClass('state-error');
        $('#fechaInicio').parent().removeClass('state-error');
    };
    EducacionDialogFormComponent.prototype.onChangeDateFin = function (value) {
        this.fechaFin = value;
    };
    EducacionDialogFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    EducacionDialogFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    EducacionDialogFormComponent.prototype.cerrarDialogEducacion = function () {
        this.mensaje = '';
        $('#dialog-message-educacion').dialog("close");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', educacion_1.Educacion), 
        __metadata('design:paramtypes', [educacion_1.Educacion])
    ], EducacionDialogFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EducacionDialogFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EducacionDialogFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], EducacionDialogFormComponent.prototype, "lgModal", void 0);
    EducacionDialogFormComponent = __decorate([
        core_1.Component({
            selector: 'educacion-dialog-form',
            template: "\n\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{tituloCabecera}}</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n          <form [formGroup]=\"editForm\" class=\"smart-form\">\n            \n            <div class=\"row\">\n              \n                <section class=\"col col-md-6\">\n                  <label for=\"NivelEducacion\">Nivel Educacion</label>\n                  <label class=\"input\"> \n                        <kendo-dropdownlist id=\"nivelEducacion\" [data]=\"nivelesEducacion\" formControlName=\"NivelEducacion\" [(value)]=\"nivelEducacion\" [valuePrimitive]=\"true\" [defaultItem]=\"defaultItem\" [textField]=\"'nombre'\" [valueField]=\"'codigo'\" style=\"width: 100%;\"></kendo-dropdownlist>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-6\">\n                  <label for=\"Institucion\">Institucion</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"institucion\" formControlName=\"Institucion\" [(ngModel)]=\"institucion\" (keyup)=\"ingresaInstitucion()\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-12\">\n                  <label for=\"Titulo\">Titulo</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" formControlName=\"Titulo\" [(ngModel)]=\"titulo\"/>\n                  </label>\n                 </section>\n                <section class=\"col col-md-12\">\n                  <label for=\"Descripcion\">Descripcion</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" formControlName=\"Descripcion\" [(ngModel)]=\"descripcion\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-4\">\n                  <label for=\"FechaInicio\">Fecha Inicio</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" id=\"fechaInicio\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaInicio\" [(ngModel)]=\"fechaInicio\" (change)=\"onChangeDateInicio($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                 <section class=\"col col-md-4\">\n                  <label for=\"FechaFin\">Fecha Fin</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaFin\" [(ngModel)]=\"fechaFin\" (change)=\"onChangeDateFin($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                \n              </div>\n              \n              <div id=\"dialog-message-educacion\" [saJquiDialog]=\"{\n\t\t\t\t\t\t\t\tautoOpen: false,\n\t\t\t\t\t\t\t\tmodal: true,\n\t\t\t\t\t\t\t\tresizable: false\n\t\t\t\t\t\t\t  }\">\n\t\t\t\t\t\t<!-- dialog header // removing on compile-->\n\t\t\t\t\t\t<div data-dialog-title=\"\">\n\t\t\t\t\t\t\t<div class=\"widget-header\"><h4><i class=\"icon-ok\"></i> Informacion</h4></div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{mensaje}}\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<div class=\"hr hr-12 hr-double\"></div>\n\n\t\t\t\t\t\t<div data-dialog-buttons=\"\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"cerrarDialogEducacion()\"><i class=\"fa fa-check\"></i>&nbsp;OK</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n              \n          </form>\n          \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n            </button>\n          </div>\n          \n          </div>\n    </div>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [empleado_service_1.EmpleadoService])
    ], EducacionDialogFormComponent);
    return EducacionDialogFormComponent;
}());
exports.EducacionDialogFormComponent = EducacionDialogFormComponent;
//# sourceMappingURL=educacion.dialog.component.js.map