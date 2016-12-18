"use strict";
var router_1 = require("@angular/router");
var pricing_tables_component_1 = require("./pricing-tables/pricing-tables.component");
var invoice_component_1 = require("./invoice/invoice.component");
var blank_component_1 = require("./blank/blank.component");
var ckeditor_component_1 = require("./ckeditor/ckeditor.component");
var email_template_component_1 = require("./email-template/email-template.component");
var error404_component_1 = require("./error404/error404.component");
var error500_component_1 = require("./error500/error500.component");
var search_component_1 = require("./search/search.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'blank'
    },
    {
        path: 'blank',
        component: blank_component_1.BlankComponent
    },
    {
        path: 'ckeditor',
        component: ckeditor_component_1.CkeditorComponent
    },
    {
        path: 'email-template',
        component: email_template_component_1.EmailTemplateComponent
    },
    {
        path: 'error404',
        component: error404_component_1.Error404Component
    },
    {
        path: 'error500',
        component: error500_component_1.Error500Component
    },
    {
        path: 'invoice',
        component: invoice_component_1.InvoiceComponent
    },
    {
        path: 'pricing-tables',
        component: pricing_tables_component_1.PricingTablesComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=miscellaneous.routing.js.map