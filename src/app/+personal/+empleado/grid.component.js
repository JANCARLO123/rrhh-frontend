/*import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: `
<kendo-dialog title="Action required">
    <p>Entropy happened.</p>
    <p>Do you accept?</p>

    <kendo-dialog-actions>
        <button kendoButton primary="true">Yes</button>
        <button kendoButton>No</button>
    </kendo-dialog-actions>
</kendo-dialog>

    `
})

export class AppComponent {
}*/
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
var product_1 = require('./product');
var GridEditFormComponent = (function () {
    function GridEditFormComponent() {
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.active = false;
        this.editForm = new forms_1.FormGroup({
            'ProductName': new forms_1.FormControl("", forms_1.Validators.required),
            'UnitPrice': new forms_1.FormControl(),
            'UnitsInStock': new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{1,2}')])),
            'Discontinued': new forms_1.FormControl(false)
        });
    }
    Object.defineProperty(GridEditFormComponent.prototype, "model", {
        set: function (product) {
            this.dataItem = product;
            product === undefined ? this.active = false : this.active = true;
        },
        enumerable: true,
        configurable: true
    });
    GridEditFormComponent.prototype.onSave = function (e) {
        e.preventDefault();
        this.save.emit(this.dataItem);
        this.active = false;
    };
    GridEditFormComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.active = false;
        this.cancel.emit(undefined);
    };
    GridEditFormComponent.prototype.addProduct = function () {
        this.model = new product_1.Product();
        this.active = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product), 
        __metadata('design:paramtypes', [product_1.Product])
    ], GridEditFormComponent.prototype, "model", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridEditFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridEditFormComponent.prototype, "save", void 0);
    GridEditFormComponent = __decorate([
        core_1.Component({
            selector: 'kendo-grid-edit-form',
            styles: ["\n       .ng-valid {\n            border-left: 5px solid #42A948;\n        }\n\n        .ng-invalid {\n            border-left: 5px solid #a94442;\n        }\n        .invalid {\n            color: #a94442;\n        }\n    "],
            template: "\n        <kendo-dialog *ngIf=\"active\" title=\"Edit\" (onClose)=\"active=false\">\n            <form {formGroup}=\"editForm\">\n                <div>\n                    <label for=\"ProductName\">ProductName</label>\n                    <input type=\"text\" name=\"ProductName\" [(ngModel)]=\"dataItem.ProductName\" />\n                    <div [hidden]=\"editForm.controls.ProductName.valid || editForm.controls.ProductName.pristine\" class=\"invalid\">\n                        ProductName is required\n                    </div>\n                </div>\n                <div>\n                    <label for=\"UnitPrice\">UnitPrice</label>\n                    <input type=\"text\" name=\"UnitPrice\" [(ngModel)]=\"dataItem.UnitPrice\"/>\n                </div>\n                <div>\n                    <label for=\"Discontinued\">Discontinued</label>\n                    <input type=\"checkbox\" name=\"Discontinued\" [(ngModel)]=\"dataItem.Discontinued\"/>\n                </div>\n                <div>\n                    <label for=\"UnitsInStock\">UnitsInStock</label>\n                    <input type=\"text\" name=\"UnitsInStock\" [(ngModel)]=\"dataItem.UnitsInStock\"/>\n                    <div [hidden]=\"editForm.controls.UnitsInStock.valid || editForm.controls.UnitsInStock.pristine\" class=\"invalid\">\n                        UnitsInStock must be between 0 and 99\n                    </div>\n                </div>\n            </form>\n\n            <kendo-dialog-actions>\n                <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\n                <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\n            </kendo-dialog-actions>\n        </kendo-dialog>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridEditFormComponent);
    return GridEditFormComponent;
}());
exports.GridEditFormComponent = GridEditFormComponent;
//# sourceMappingURL=grid.component.js.map