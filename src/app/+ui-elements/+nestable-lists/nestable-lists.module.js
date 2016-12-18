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
var nestable_lists_routing_1 = require('./nestable-lists.routing');
var nestable_lists_component_1 = require("./nestable-lists.component");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var nestable_list_module_1 = require("../../shared/ui/nestable-list/nestable-list.module");
var NestableListsModule = (function () {
    function NestableListsModule() {
    }
    NestableListsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                nestable_lists_routing_1.nestableListsRouting,
                smartadmin_module_1.SmartadminModule,
                nestable_list_module_1.NestableListModule,
            ],
            declarations: [nestable_lists_component_1.NestableListsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NestableListsModule);
    return NestableListsModule;
}());
exports.NestableListsModule = NestableListsModule;
//# sourceMappingURL=nestable-lists.module.js.map