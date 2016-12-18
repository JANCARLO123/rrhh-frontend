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
var pricing_tables_component_1 = require('./pricing-tables/pricing-tables.component');
var miscellaneous_routing_1 = require("./miscellaneous.routing");
var invoice_component_1 = require('./invoice/invoice.component');
var error404_component_1 = require('./error404/error404.component');
var error500_component_1 = require('./error500/error500.component');
var blank_component_1 = require('./blank/blank.component');
var email_template_component_1 = require('./email-template/email-template.component');
var search_component_1 = require('./search/search.component');
var ckeditor_component_1 = require('./ckeditor/ckeditor.component');
var smartadmin_widgets_module_1 = require("../shared/widgets/smartadmin-widgets.module");
var layout_module_1 = require("../shared/layout/layout.module");
var stats_module_1 = require("../shared/stats/stats.module");
var MiscellaneousModule = (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                miscellaneous_routing_1.routing,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
                layout_module_1.SmartadminLayoutModule,
                stats_module_1.StatsModule,
            ],
            declarations: [pricing_tables_component_1.PricingTablesComponent, invoice_component_1.InvoiceComponent, error404_component_1.Error404Component,
                error500_component_1.Error500Component, blank_component_1.BlankComponent, email_template_component_1.EmailTemplateComponent, search_component_1.SearchComponent,
                ckeditor_component_1.CkeditorComponent,]
        }), 
        __metadata('design:paramtypes', [])
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());
exports.MiscellaneousModule = MiscellaneousModule;
//# sourceMappingURL=miscellaneous.module.js.map