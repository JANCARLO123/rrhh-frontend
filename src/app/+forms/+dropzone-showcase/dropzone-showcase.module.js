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
var common_1 = require('@angular/common');
var dropzone_showcase_routing_1 = require('./dropzone-showcase.routing');
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var dropzone_module_1 = require("../../shared/forms/dropzone/dropzone.module");
var dropzone_showcase_component_1 = require("./dropzone-showcase.component");
var DropzoneShowcaseModule = (function () {
    function DropzoneShowcaseModule() {
    }
    DropzoneShowcaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dropzone_showcase_routing_1.dropzoneShowcaseRouting,
                smartadmin_module_1.SmartadminModule,
                dropzone_module_1.DropzoneModule
            ],
            declarations: [dropzone_showcase_component_1.DropzoneShowcaseComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DropzoneShowcaseModule);
    return DropzoneShowcaseModule;
}());
exports.DropzoneShowcaseModule = DropzoneShowcaseModule;
//# sourceMappingURL=dropzone-showcase.module.js.map