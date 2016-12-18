"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var index_1 = require("ng2-popover/src/index");
var api_1 = require('./api');
var layout_service_1 = require('./layout/layout.service');
var layout_1 = require('./layout');
var i18n_module_1 = require("./i18n/i18n.module");
var smartadmin_widgets_module_1 = require("./widgets/smartadmin-widgets.module");
var utils_module_1 = require("./utils/utils.module");
var chat_module_1 = require("./chat/chat.module");
var stats_module_1 = require("./stats/stats.module");
var inline_graphs_module_1 = require("./graphs/inline/inline-graphs.module");
var smartadmin_forms_lite_module_1 = require("./forms/smartadmin-forms-lite.module");
var smart_progressbar_module_1 = require("./ui/smart-progressbar/smart-progressbar.module");
var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    SmartadminModule.forRoot = function () {
        return {
            ngModule: SmartadminModule,
            providers: [api_1.JsonApiService, layout_service_1.LayoutService]
        };
    };
    SmartadminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
            ],
            declarations: [],
            exports: [
                common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
                ng2_bootstrap_1.ModalModule,
                ng2_bootstrap_1.ButtonsModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.ProgressbarModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.TabsModule,
                ng2_bootstrap_1.AccordionModule,
                ng2_bootstrap_1.CarouselModule,
                index_1.PopoverModule,
                layout_1.SmartadminLayoutModule,
                i18n_module_1.I18nModule,
                utils_module_1.UtilsModule,
                smartadmin_forms_lite_module_1.SmartadminFormsLiteModule,
                smart_progressbar_module_1.SmartProgressbarModule,
                inline_graphs_module_1.InlineGraphsModule,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
                chat_module_1.ChatModule,
                stats_module_1.StatsModule,
            ],
            providers: [api_1.JsonApiService, layout_service_1.LayoutService]
        })
    ], SmartadminModule);
    return SmartadminModule;
}());
exports.SmartadminModule = SmartadminModule;
