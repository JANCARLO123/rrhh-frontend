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
var http_1 = require('@angular/http');
var Product = (function () {
    function Product(ProductID, ProductName, Discountinued, UnitsInStock) {
        this.ProductID = ProductID;
        this.ProductName = ProductName;
        this.Discountinued = Discountinued;
        this.UnitsInStock = UnitsInStock;
    }
    return Product;
}());
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
        this.model = new Product();
        this.active = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product), 
        __metadata('design:paramtypes', [Product])
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
            template: "\n        <kendo-dialog *ngIf=\"active\" title=\"Edit\" (onClose)=\"active=false\">\n            <form [formGroup]=\"editForm\">\n                <div>\n                    <label for=\"ProductName\">ProductName</label>\n                    <input type=\"text\" formControlName=\"ProductName\" [(ngModel)]=\"dataItem.ProductName\" />\n                    <div [hidden]=\"editForm.controls.ProductName.valid || editForm.controls.ProductName.pristine\" class=\"invalid\">\n                        ProductName is required\n                    </div>\n                </div>\n                <div>\n                    <label for=\"UnitPrice\">UnitPrice</label>\n                    <input type=\"text\" formControlName=\"UnitPrice\" [(ngModel)]=\"dataItem.UnitPrice\"/>\n                </div>\n                <div>\n                    <label for=\"Discontinued\">Discontinued</label>\n                    <input type=\"checkbox\" formControlName=\"Discontinued\" [(ngModel)]=\"dataItem.Discontinued\"/>\n                </div>\n                <div>\n                    <label for=\"UnitsInStock\">UnitsInStock</label>\n                    <input type=\"text\" formControlName=\"UnitsInStock\" [(ngModel)]=\"dataItem.UnitsInStock\"/>\n                    <div [hidden]=\"editForm.controls.UnitsInStock.valid || editForm.controls.UnitsInStock.pristine\" class=\"invalid\">\n                        UnitsInStock must be between 0 and 99\n                    </div>\n                </div>\n            </form>\n\n            <kendo-dialog-actions>\n                <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\n                <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\n            </kendo-dialog-actions>\n        </kendo-dialog>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridEditFormComponent);
    return GridEditFormComponent;
}());
exports.GridEditFormComponent = GridEditFormComponent;
var AppComponent = (function () {
    function AppComponent(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.getProducts()
            .subscribe(function (data) { return _this.view = data; });
    }
    AppComponent.prototype.onEdit = function (dataItem) {
        this.dataItem = dataItem;
    };
    AppComponent.prototype.onCancel = function () {
        this.dataItem = undefined;
    };
    AppComponent.prototype.addProduct = function () {
        this.editFormComponent.addProduct();
    };
    AppComponent.prototype.onSave = function (product) {
        var _this = this;
        var operation = product.ProductID === undefined ?
            this.createProduct(product) :
            this.saveProducts(product);
        operation.switchMap(function (x) { return _this.getProducts(); })
            .subscribe(function (response) {
            _this.view = response;
        });
    };
    AppComponent.prototype.onDelete = function (e) {
        var _this = this;
        this.deleteProduct(e)
            .switchMap(function (x) { return _this.getProducts(); })
            .subscribe(function (response) {
            _this.view = response;
        });
    };
    AppComponent.prototype.getProducts = function () {
        return this.fetch();
    };
    AppComponent.prototype.saveProducts = function (data) {
        return this.fetch("update", data);
    };
    AppComponent.prototype.createProduct = function (data) {
        data.ProductID = null;
        return this.fetch("create", data);
    };
    AppComponent.prototype.deleteProduct = function (data) {
        return this.fetch("destroy", data);
    };
    AppComponent.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ""; }
        return this.jsonp
            .get("http://demos.telerik.com/kendo-ui/service/Products/" + action + "?callback=JSONP_CALLBACK" + this.serializeModels(data))
            .map(function (response) { return response.json(); });
    };
    AppComponent.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    __decorate([
        core_1.ViewChild(GridEditFormComponent), 
        __metadata('design:type', GridEditFormComponent)
    ], AppComponent.prototype, "editFormComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'grid-test',
            template: "\n      <button (click)=\"addProduct()\" class=\"k-button k-button-icontext k-grid-add\">Add new</button>\n      <kendo-grid [data]=\"view\">\n        <kendo-grid-column field=\"ProductName\"></kendo-grid-column>\n        <kendo-grid-column field=\"UnitPrice\" title=\"UnitPrice\"></kendo-grid-column>\n        <kendo-grid-column field=\"Discontinued\" title=\"Discontinued\"></kendo-grid-column>\n        <kendo-grid-column field=\"UnitsInStock\" title=\"UnitsInStock\"></kendo-grid-column>\n         <kendo-grid-column>\n            <template kendoHeaderTemplate>\n                Editing\n            </template>\n            <template kendoCellTemplate let-dataItem>\n                <button (click)=\"onEdit(dataItem)\" class=\"k-button k-button-icontext k-grid-edit\">Edit</button>\n                <button (click)=\"onDelete(dataItem)\" class=\"k-button k-button-icontext k-grid-delete\">Delete</button>\n            </template>\n        </kendo-grid-column>\n      </kendo-grid>\n      <kendo-grid-edit-form [model]=\"dataItem\" (cancel)=\"onCancel()\" (save)=\"onSave($event)\"></kendo-grid-edit-form>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=dialog.component.js.map