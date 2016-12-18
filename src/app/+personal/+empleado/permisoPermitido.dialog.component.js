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
var ExperienciaLaboralDialogFormComponent = (function () {
    function ExperienciaLaboralDialogFormComponent() {
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.titulo = "";
        this.editForm = new forms_1.FormGroup({
            'RazonSocial': new forms_1.FormControl(),
            'Departamento': new forms_1.FormControl(),
            'Cargo': new forms_1.FormControl()
        });
    }
    Object.defineProperty(ExperienciaLaboralDialogFormComponent.prototype, "model", {
        set: function (dto) {
            this.dataItem = dto;
            dto === undefined ? this.active = false : this.active = true;
        },
        enumerable: true,
        configurable: true
    });
    ExperienciaLaboralDialogFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        this.save.emit(this.dataItem);
        this.active = false;
    };
    ExperienciaLaboralDialogFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.cancel.emit(undefined);
    };
    ExperienciaLaboralDialogFormComponent.prototype.onClose = function () {
        this.active = false;
        this.cancel.emit(undefined);
    };
    ExperienciaLaboralDialogFormComponent.prototype.agregarExperienciaLaboral = function () {
        this.model = new experienciaLaboral_1.ExperienciaLaboral();
        this.active = true;
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
    ExperienciaLaboralDialogFormComponent = __decorate([
        core_1.Component({
            selector: 'permisopermitido-dialog-form',
            template: "\n        <kendo-dialog *ngIf=\"active\" title=\"{{titulo}}\" (onClose)=\"onClose()\">\n            <form [formGroup]=\"editForm\">\n                <div>\n                    <label for=\"RazonSocial\">Empresa</label>\n                    <input type=\"text\" formControlName=\"RazonSocial\" [(ngModel)]=\"dataItem.razonSocial\"/>\n                </div>\n                <div>\n                    <label for=\"Departamento\">Departamento</label>\n                    <input type=\"text\" formControlName=\"Departamento\" [(ngModel)]=\"dataItem.departamento\"/>\n                </div>\n                <div>\n                    <label for=\"Cargo\">Cargo</label>\n                    <input type=\"text\" formControlName=\"Cargo\" [(ngModel)]=\"dataItem.cargo\"/>\n                </div>\n            </form>\n\n            <kendo-dialog-actions>\n                <button class=\"k-button\" (click)=\"onCancel($event)\">Cancelar</button>\n                <button class=\"k-button k-primary\" (click)=\"onSave($event)\">Guardar</button>\n            </kendo-dialog-actions>\n        </kendo-dialog>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExperienciaLaboralDialogFormComponent);
    return ExperienciaLaboralDialogFormComponent;
}());
exports.ExperienciaLaboralDialogFormComponent = ExperienciaLaboralDialogFormComponent;
//# sourceMappingURL=permisoPermitido.dialog.component.js.map