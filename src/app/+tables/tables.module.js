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
var smartadmin_module_1 = require('../shared/smartadmin.module');
var tables_routing_1 = require('./tables.routing');
var normal_tables_component_1 = require("./+normal-tables/normal-tables.component");
var datatables_showcase_component_1 = require("./+datatables-showcase/datatables-showcase.component");
var smartadmin_datatable_module_1 = require("../shared/ui/datatable/smartadmin-datatable.module");
var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            declarations: [
                normal_tables_component_1.NormalTablesComponent, datatables_showcase_component_1.DatatablesShowcaseComponent
            ],
            imports: [
                smartadmin_module_1.SmartadminModule,
                smartadmin_datatable_module_1.SmartadminDatatableModule,
                tables_routing_1.routing
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map