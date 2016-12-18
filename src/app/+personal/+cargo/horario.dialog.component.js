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
var dias_1 = require('./dias');
var http_empleados_service_1 = require('./http-empleados-service');
var HorarioDialogFormComponent = (function () {
    function HorarioDialogFormComponent(cargoService) {
        this.cargoService = cargoService;
        this.tituloCabecera = "";
        this.active = false;
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.editForm = new forms_1.FormGroup({
            'Entrada': new forms_1.FormControl(),
            'Salida': new forms_1.FormControl(),
            'Almuerzo': new forms_1.FormControl()
        });
    }
    Object.defineProperty(HorarioDialogFormComponent.prototype, "model", {
        set: function (dto) {
            this.dataItem = dto;
            dto === undefined ? this.lgModal.hide() : this.lgModal.show();
            ;
        },
        enumerable: true,
        configurable: true
    });
    HorarioDialogFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        if (this.dataItem === undefined)
            this.dataItem = new dias_1.Dias(undefined, this.nombre, this.laboral, this.entrada, this.salida, this.almuerzo);
        else {
            this.dataItem.entrada = this.entrada;
            this.dataItem.salida = this.salida;
            this.dataItem.almuerzo = this.almuerzo;
        }
        this.save.emit(this.dataItem);
        this.active = false;
        this.lgModal.hide();
    };
    HorarioDialogFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    HorarioDialogFormComponent.prototype.onClose = function () {
        this.active = false;
        this.lgModal.hide();
        this.cancel.emit(undefined);
    };
    HorarioDialogFormComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    HorarioDialogFormComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dias_1.Dias), 
        __metadata('design:paramtypes', [dias_1.Dias])
    ], HorarioDialogFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HorarioDialogFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HorarioDialogFormComponent.prototype, "save", void 0);
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], HorarioDialogFormComponent.prototype, "lgModal", void 0);
    HorarioDialogFormComponent = __decorate([
        core_1.Component({
            selector: 'horario-edit-dialog-form',
            template: "\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n            <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\">{{tituloCabecera}}</h4>\n            </div>\n            <!-- Start -->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"editForm\" class=\"smart-form\">\n                    <div class=\"row\">\n                        <section class=\"col col-md-6\">\n                            <label for=\"Entrada\">Entrada</label>\n                            <label class=\"input\"> \n                                    <input type=\"text\" formControlName=\"Entrada\" [(ngModel)]=\"entrada\"/>\n                            </label>\n                        </section>\n                        <section class=\"col col-md-6\">\n                            <label for=\"Salida\">Salida</label>\n                            <label class=\"input\"> \n                                    <input type=\"text\" formControlName=\"Salida\" [(ngModel)]=\"salida\"/>\n                            </label>\n                        </section>\n                        <section class=\"col col-md-6\">\n                            <label for=\"Almuerzo\">Almuerzo</label>\n                            <label class=\"input\"> \n                                    <input type=\"text\" formControlName=\"Almuerzo\" [(ngModel)]=\"almuerzo\"/>\n                            </label>\n                        </section>\n                        \n                    </div>\n                </form>\n            </div>\n            <!-- End -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel($event)\"> Cancelar\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\"> Agregar\n                </button>\n            </div>\n      </div>\n    </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_empleados_service_1.CargoService])
    ], HorarioDialogFormComponent);
    return HorarioDialogFormComponent;
}());
exports.HorarioDialogFormComponent = HorarioDialogFormComponent;
//# sourceMappingURL=horario.dialog.component.js.map