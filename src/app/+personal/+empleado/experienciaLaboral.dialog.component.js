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
var experienciaLaboral_1 = require("./experienciaLaboral");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ExperienciaLaboralDialogFormComponent = (function () {
    function ExperienciaLaboralDialogFormComponent() {
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.titulo = "";
        this.editForm = new forms_1.FormGroup({
            'RazonSocial': new forms_1.FormControl(),
            'Departamento': new forms_1.FormControl(),
            'Cargo': new forms_1.FormControl(),
            'Descripcion': new forms_1.FormControl(),
            'FechaInicio': new forms_1.FormControl(),
            'FechaFin': new forms_1.FormControl()
        });
    }
    Object.defineProperty(ExperienciaLaboralDialogFormComponent.prototype, "model", {
        set: function (dto) {
            this.dataItem = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
        },
        enumerable: true,
        configurable: true
    });
    ExperienciaLaboralDialogFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        if (this.dataItem === undefined)
            this.dataItem = new experienciaLaboral_1.ExperienciaLaboral(undefined, this.razonSocial, this.departamento, this.cargo, this.descripcion, this.fechaInicio, this.fechaFin);
        else {
            this.dataItem.razonSocial = this.razonSocial;
            this.dataItem.departamento = this.departamento;
            this.dataItem.cargo = this.cargo;
            this.dataItem.descripcion = this.descripcion;
            this.dataItem.fechaInicio = this.fechaInicio;
            this.dataItem.fechaFin = this.fechaFin;
        }
        //validar
        if (this.validarRequerido()) {
            this.mensaje = 'Ingrese los campos obligatorios';
            $('#dialog-message-exp-laboral').dialog("open");
            return;
        }
        this.save.emit(this.dataItem);
        this.lgModal.hide();
    };
    ExperienciaLaboralDialogFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    ExperienciaLaboralDialogFormComponent.prototype.onClose = function () {
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    ExperienciaLaboralDialogFormComponent.prototype.agregarExperienciaLaboral = function () {
        this.model = new experienciaLaboral_1.ExperienciaLaboral();
        this.razonSocial = "";
        this.departamento = "";
        this.cargo = "";
        this.descripcion = "";
        this.fechaInicio = "";
        this.fechaFin = "";
        $('#empresa').parent().removeClass('state-error');
        $('#departamento').parent().removeClass('state-error');
        $('#cargo').parent().removeClass('state-error');
        $('#fechaInicioExperiencia').parent().removeClass('state-error');
        this.active = true;
        this.lgModal.show();
    };
    ExperienciaLaboralDialogFormComponent.prototype.onChangeDateInicio = function (value) {
        debugger;
        this.fechaInicio = value;
        $('#fechaInicio').parent().removeClass('state-error');
    };
    ExperienciaLaboralDialogFormComponent.prototype.onChangeDateFin = function (value) {
        debugger;
        this.fechaFin = value;
    };
    ExperienciaLaboralDialogFormComponent.prototype.ingresaEmpresa = function () {
        $('#empresa').parent().removeClass('state-error');
    };
    ExperienciaLaboralDialogFormComponent.prototype.ingresaDepartamento = function () {
        $('#departamento').parent().removeClass('state-error');
    };
    ExperienciaLaboralDialogFormComponent.prototype.ingresaCargo = function () {
        $('#cargo').parent().removeClass('state-error');
    };
    ExperienciaLaboralDialogFormComponent.prototype.validarRequerido = function () {
        var validacion = false;
        if (this.razonSocial === undefined || this.razonSocial == null || this.razonSocial == '') {
            $('#empresa').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.departamento === undefined || this.departamento == null || this.departamento == '') {
            $('#departamento').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.cargo === undefined || this.cargo == null || this.cargo == '') {
            $('#cargo').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        if (this.fechaInicio === undefined || this.fechaInicio == null || this.fechaInicio == '') {
            $('#fechaInicioExperiencia').parent().addClass('state-error').removeClass('state-success');
            validacion = true;
        }
        return validacion;
    };
    ExperienciaLaboralDialogFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    ExperienciaLaboralDialogFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    ExperienciaLaboralDialogFormComponent.prototype.cerrarDialogExpLaboral = function () {
        this.mensaje = '';
        $('#dialog-message-exp-laboral').dialog("close");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', experienciaLaboral_1.ExperienciaLaboral), 
        __metadata('design:paramtypes', [experienciaLaboral_1.ExperienciaLaboral])
    ], ExperienciaLaboralDialogFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ExperienciaLaboralDialogFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ExperienciaLaboralDialogFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ExperienciaLaboralDialogFormComponent.prototype, "lgModal", void 0);
    ExperienciaLaboralDialogFormComponent = __decorate([
        core_1.Component({
            selector: 'experiencialaboral-dialog-form',
            template: "\n        <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{titulo}}</h4>\n        </div>\n        <div class=\"modal-body\">\n        \n          <form [formGroup]=\"editForm\" class=\"smart-form\">\n            \n            <div class=\"row\">\n              \n                <section class=\"col col-md-12\">\n                  <label for=\"RazonSocial\">Empresa</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"empresa\" formControlName=\"RazonSocial\" [(ngModel)]=\"razonSocial\" (keyup)=\"ingresaEmpresa()\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-6\">\n                  <label for=\"Departamento\">Departamento</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"departamento\" formControlName=\"Departamento\" [(ngModel)]=\"departamento\" (keyup)=\"ingresaDepartamento()\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-6\">\n                  <label for=\"Cargo\">Cargo</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" id=\"cargo\" formControlName=\"Cargo\" [(ngModel)]=\"cargo\" (keyup)=\"ingresaCargo()\"/>\n                  </label>\n                 </section>\n                <section class=\"col col-md-12\">\n                  <label for=\"Descripcion\">Descripcion</label>\n                  <label class=\"input\"> \n                        <input type=\"text\" formControlName=\"Descripcion\" [(ngModel)]=\"descripcion\"/>\n                  </label>\n                 </section>\n                \n                <section class=\"col col-md-4\">\n                  <label for=\"FechaInicio\">Fecha Inicio</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" id=\"fechaInicioExperiencia\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaInicio\" [(ngModel)]=\"fechaInicio\" (change)=\"onChangeDateInicio($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                 <section class=\"col col-md-4\">\n                  <label for=\"FechaFin\">Fecha Fin</label>\n                  <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n                        <input type=\"text\" placeholder=\"Seleccionar una Fecha\" formControlName=\"FechaFin\" [(ngModel)]=\"fechaFin\" (change)=\"onChangeDateFin($event)\"\n                               saUiDatepicker date-format=\"dd/mm/yy\" />\n                  </label>\n                 </section>\n                \n              </div>\n              \n              <div id=\"dialog-message-exp-laboral\" [saJquiDialog]=\"{\n\t\t\t\t\t\t\t\tautoOpen: false,\n\t\t\t\t\t\t\t\tmodal: true,\n\t\t\t\t\t\t\t\tresizable: false\n\t\t\t\t\t\t\t  }\">\n\t\t\t\t\t\t<!-- dialog header // removing on compile-->\n\t\t\t\t\t\t<div data-dialog-title=\"\">\n\t\t\t\t\t\t\t<div class=\"widget-header\"><h4><i class=\"icon-ok\"></i> Informacion</h4></div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{mensaje}}\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<div class=\"hr hr-12 hr-double\"></div>\n\n\t\t\t\t\t\t<div data-dialog-buttons=\"\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"cerrarDialogExpLaboral()\"><i class=\"fa fa-check\"></i>&nbsp;OK</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n              \n          </form>\n          \n          </div>\n               \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n            </button>\n          </div>\n          \n          </div>\n        </div>\n      </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExperienciaLaboralDialogFormComponent);
    return ExperienciaLaboralDialogFormComponent;
}());
exports.ExperienciaLaboralDialogFormComponent = ExperienciaLaboralDialogFormComponent;
//# sourceMappingURL=experienciaLaboral.dialog.component.js.map