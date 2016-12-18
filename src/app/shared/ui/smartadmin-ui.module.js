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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var smart_progressbar_module_1 = require("./smart-progressbar/smart-progressbar.module");
var tree_view_module_1 = require("./tree-view/tree-view.module");
var jquery_ui_module_1 = require("./jquery-ui/jquery-ui.module");
var nestable_list_module_1 = require("./nestable-list/nestable-list.module");
var SmartadminUiModule = (function () {
    function SmartadminUiModule() {
    }
    SmartadminUiModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [smart_progressbar_module_1.SmartProgressbarModule, jquery_ui_module_1.JqueryUiModule, nestable_list_module_1.NestableListModule, tree_view_module_1.TreeViewModule],
        }), 
        __metadata('design:paramtypes', [])
    ], SmartadminUiModule);
    return SmartadminUiModule;
}());
exports.SmartadminUiModule = SmartadminUiModule;
//# sourceMappingURL=smartadmin-ui.module.js.map