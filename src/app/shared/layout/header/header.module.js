"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var recent_projects_component_1 = require("./recent-projects/recent-projects.component");
var full_screen_component_1 = require("./full-screen/full-screen.component");
var collapse_menu_component_1 = require("./collapse-menu/collapse-menu.component");
var activities_component_1 = require("./activities/activities.component");
var activities_message_component_1 = require("./activities/activities-message/activities-message.component");
var activities_notification_component_1 = require("./activities/activities-notification/activities-notification.component");
var activities_task_component_1 = require("./activities/activities-task/activities-task.component");
var header_component_1 = require("./header.component");
var utils_module_1 = require("../../utils/utils.module");
var i18n_module_1 = require("../../i18n/i18n.module");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var speech_button_component_1 = require('./speech-button/speech-button.component');
var forms_1 = require("@angular/forms");
var user_module_1 = require("../../user/user.module");
var index_1 = require("ng2-popover/src/index");
var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.DropdownModule,
                utils_module_1.UtilsModule, i18n_module_1.I18nModule, user_module_1.UserModule, index_1.PopoverModule
            ],
            declarations: [
                activities_message_component_1.ActivitiesMessageComponent,
                activities_notification_component_1.ActivitiesNotificationComponent,
                activities_task_component_1.ActivitiesTaskComponent,
                recent_projects_component_1.RecentProjectsComponent,
                full_screen_component_1.FullScreenComponent,
                collapse_menu_component_1.CollapseMenuComponent,
                activities_component_1.ActivitiesComponent,
                header_component_1.HeaderComponent,
                speech_button_component_1.SpeechButtonComponent,
            ],
            exports: [
                header_component_1.HeaderComponent
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());
exports.HeaderModule = HeaderModule;
