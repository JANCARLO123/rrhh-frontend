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
var outlook_routing_1 = require('./outlook.routing');
var outlook_component_1 = require("./outlook.component");
var folder_component_1 = require("./folder/folder.component");
var details_component_1 = require("./details/details.component");
var replay_component_1 = require("./replay/replay.component");
var compose_component_1 = require("./compose/compose.component");
var outlook_service_1 = require("./shared/outlook.service");
var message_labels_component_1 = require("./shared/message-labels.component");
var smartadmin_editors_module_1 = require("../shared/forms/editors/smartadmin-editors.module");
var OutlookModule = (function () {
    function OutlookModule() {
    }
    OutlookModule = __decorate([
        core_1.NgModule({
            declarations: [
                outlook_component_1.OutlookComponent,
                folder_component_1.FolderComponent,
                details_component_1.DetailsComponent,
                replay_component_1.ReplayComponent,
                compose_component_1.ComposeComponent,
                message_labels_component_1.MessageLabelsComponent,
            ],
            imports: [
                smartadmin_module_1.SmartadminModule,
                outlook_routing_1.routing,
                smartadmin_editors_module_1.SmartadminEditorsModule,
            ],
            providers: [outlook_service_1.OutlookService],
            entryComponents: [outlook_component_1.OutlookComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], OutlookModule);
    return OutlookModule;
}());
exports.OutlookModule = OutlookModule;
//# sourceMappingURL=outlook.module.js.map