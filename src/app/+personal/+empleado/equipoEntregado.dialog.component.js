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
var equipoEntregado_1 = require("./equipoEntregado");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var EquipoEntregadoDialogFormComponent = (function () {
    function EquipoEntregadoDialogFormComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.defaultItem = { codigo: null, nombre: 'Seleccionar' };
        this.active = false;
        this.titulo = "";
        this.editForm = new forms_1.FormGroup({
            'TipoEquipo': new forms_1.FormControl(),
            'Descripcion': new forms_1.FormControl(),
            'Estado': new forms_1.FormControl(),
            'FechaEntrega': new forms_1.FormControl(),
            'FechaDevolucion': new forms_1.FormControl()
        });
    }
    Object.defineProperty(EquipoEntregadoDialogFormComponent.prototype, "model", {
        set: function (dto) {
            this.dataItem = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
        },
        enumerable: true,
        configurable: true
    });
    EquipoEntregadoDialogFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        for (var item in this.tiposEquipo) {
            var data = this.tiposEquipo[item];
            if (this.tipoEquipo === data.codigo) {
                this.nombreTipoEquipo = data.nombre;
                break;
            }
        }
        for (var item in this.estados) {
            var data = this.estados[item];
            if (this.estado === data.codigo) {
                this.nombreEstado = data.nombre;
                break;
            }
        }
        if (this.dataItem === undefined)
            this.dataItem = new equipoEntregado_1.EquipoEntregado(undefined, this.tipoEquipo, this.estado, this.descripcion, this.nombreTipoEquipo, this.nombreEstado, this.fechaEntrega, this.fechaDevolucion);
        else {
            this.dataItem.tipoEquipo = this.tipoEquipo;
            this.dataItem.estado = this.estado;
            this.dataItem.nombreTipoEquipo = this.nombreTipoEquipo;
            this.dataItem.nombreEstado = this.nombreEstado;
            this.dataItem.fechaEntrega = this.fechaEntrega;
            this.dataItem.fechaDevolucion = this.fechaDevolucion;
            this.dataItem.descripcion = this.descripcion;
        }
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message-eq-entregado').dialog("open");
            return;
        }
        this.save.emit(this.dataItem);
        this.active = false;
        this.lgModal.hide();
    };
    EquipoEntregadoDialogFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    EquipoEntregadoDialogFormComponent.prototype.onClose = function () {
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    EquipoEntregadoDialogFormComponent.prototype.agregarEquipoEntregado = function () {
        this.obtenerTipoEquipo();
        this.obtenerEstadoTipoEquipo();
        this.model = new equipoEntregado_1.EquipoEntregado();
        this.tipoEquipo = "";
        this.estado = "";
        this.nombreTipoEquipo = "";
        this.nombreEstado = "";
        this.fechaEntrega = "";
        this.fechaDevolucion = "";
        $('#tipoEquipo').parent().removeClass('state-error');
        $('#equipoEstado').parent().removeClass('state-error');
        $('#descripcion').parent().removeClass('state-error');
        $('#fechaEntrega').parent().removeClass('state-error');
        this.active = true;
        this.lgModal.show();
    };
    EquipoEntregadoDialogFormComponent.prototype.obtenerTipoEquipo = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerTipoEquipo').subscribe(function (tablaGeneralDto) { return _this.tiposEquipo = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EquipoEntregadoDialogFormComponent.prototype.obtenerEstadoTipoEquipo = function () {
        var _this = this;
        this.empleadoService.completarComboBox('obtenerEstadoTipoEquipo').subscribe(function (tablaGeneralDto) { return _this.estados = tablaGeneralDto; }, function (error) { return _this.errorMessage = error; });
    };
    EquipoEntregadoDialogFormComponent.prototype.onChangeDateInicio = function (value) {
        this.fechaEntrega = value;
        $('#fechaEntrega').removeClass('state-error');
        $('#fechaEntrega').parent().removeClass('state-error');
    };
    EquipoEntregadoDialogFormComponent.prototype.onChangeDateFin = function (value) {
        this.fechaDevolucion = value;
    };
    EquipoEntregadoDialogFormComponent.prototype.ingresaDescripcion = function () {
        $('#descripcion').removeClass('state-error');
        $('#descripcion').parent().removeClass('state-error');
    };
    EquipoEntregadoDialogFormComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.tipoEquipo === undefined || this.tipoEquipo == null || this.tipoEquipo == '') {
            $('#tipoEquipo').addClass('invalid').removeClass('required');
            $('#tipoEquipo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.estado === undefined || this.estado == null || this.estado == '') {
            $('#equipoEstado').addClass('invalid').removeClass('required');
            $('#equipoEstado').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.descripcion === undefined || this.descripcion == null || this.descripcion == '') {
            $('#descripcion').addClass('invalid').removeClass('required');
            $('#descripcion').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.fechaEntrega === undefined || this.fechaEntrega == null || this.fechaEntrega == '') {
            $('#fechaEntrega').addClass('invalid').removeClass('required');
            $('#fechaEntrega').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    EquipoEntregadoDialogFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    EquipoEntregadoDialogFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    EquipoEntregadoDialogFormComponent.prototype.cerrarDialogEqEntregado = function () {
        this.mensaje = '';
        $('#dialog-message-eq-entregado').dialog("close");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', equipoEntregado_1.EquipoEntregado), 
        __metadata('design:paramtypes', [equipoEntregado_1.EquipoEntregado])
    ], EquipoEntregadoDialogFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EquipoEntregadoDialogFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EquipoEntregadoDialogFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], EquipoEntregadoDialogFormComponent.prototype, "lgModal", void 0);
    EquipoEntregadoDialogFormComponent = __decorate([
        core_1.Component({
            selector: 'equipoentregado-dialog-form',
            template: "\n        <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{titulo}}</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n            <form [formGroup]=\"editForm\" class=\"smart-form\">\n            \n            <div class=\"row\">\n              \n                <section class=\"col col-md-6\">\n                  <label for=\"TipoEquipo\">Tipo Equipo</label>\n                  <label class=\"input\"> \n                        <kendo-dropdownlist id=\"tipoEquipo\" [data]=\"tiposEquipo\" formControlName=\"TipoEquipo\" [(value)]=\"tipoEquipo\" [valuePrimitive]=\"true\" [defaultItem]=\"defaultItem\" [textField]=\"'nombre'\" [valueField]=\"'codigo'\" style=\"width: 100%;\"></kendo-dropdownlist>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-6\">\n                  <label for=\"Estado\">Estado</label>\n                  <label class=\"input\"> \n                        <kendo-dropdownlist id=\"equipoEstado\" [data]=\"estados\" formControlName=\"Estado\" [(value)]=\"estado\" [valuePrimitive]=\"true\" [defaultItem]=\"defaultItem\" [textField]=\"'nombre'\" [valueField]=\"'codigo'\" style=\"width: 100%;\"></kendo-dropdownlist>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-12\">\n                  <label for=\"Descripcion\">Descripcion</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"descripcion\" formControlName=\"Descripcion\" [(ngModel)]=\"descripcion\" (keyup)=\"ingresaDescripcion()\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-4\">\n                  <label for=\"FechaEntrega\">Fecha Entrega</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" id=\"fechaEntrega\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaEntrega\" [(ngModel)]=\"fechaEntrega\" (change)=\"onChangeDateInicio($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                 <section class=\"col col-md-4\">\n                  <label for=\"FechaDevolucion\">Fecha Devolucion</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaDevolucion\" [(ngModel)]=\"fechaDevolucion\" (change)=\"onChangeDateFin($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                \n              </div>\n              \n              <div id=\"dialog-message-eq-entregado\" [saJquiDialog]=\"{\n\t\t\t\t\t\t\t\tautoOpen: false,\n\t\t\t\t\t\t\t\tmodal: true,\n\t\t\t\t\t\t\t\tresizable: false\n\t\t\t\t\t\t\t  }\">\n\t\t\t\t\t\t<!-- dialog header // removing on compile-->\n\t\t\t\t\t\t<div data-dialog-title=\"\">\n\t\t\t\t\t\t\t<div class=\"widget-header\"><h4><i class=\"icon-ok\"></i> Informacion</h4></div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{mensaje}}\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<div class=\"hr hr-12 hr-double\"></div>\n\n\t\t\t\t\t\t<div data-dialog-buttons=\"\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"cerrarDialogEqEntregado()\"><i class=\"fa fa-check\"></i>&nbsp;OK</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n              \n              \n          </form>\n        \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n            </button>\n          </div>\n          \n          </div>\n    </div>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [empleado_service_1.EmpleadoService])
    ], EquipoEntregadoDialogFormComponent);
    return EquipoEntregadoDialogFormComponent;
}());
exports.EquipoEntregadoDialogFormComponent = EquipoEntregadoDialogFormComponent;
//# sourceMappingURL=equipoEntregado.dialog.component.js.map