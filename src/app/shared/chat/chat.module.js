"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var chat_widget_component_1 = require('./chat-widget/chat-widget.component');
var smartadmin_widgets_module_1 = require("../widgets/smartadmin-widgets.module");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var chat_service_1 = require("./chat.service");
var chat_component_1 = require('./chat/chat.component');
var chat_users_component_1 = require('./chat/chat-users.component');
var chat_body_component_1 = require('./chat/chat-body.component');
var chat_form_component_1 = require('./chat/chat-form.component');
var forms_1 = require("@angular/forms");
var utils_module_1 = require("../utils/utils.module");
var user_module_1 = require("../user/user.module");
var aside_chat_component_1 = require('./aside-chat/aside-chat.component');
var aside_chat_user_component_1 = require('./aside-chat-user/aside-chat-user.component');
var index_1 = require("ng2-popover/src/index");
var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                index_1.PopoverModule,
                common_1.CommonModule, forms_1.FormsModule, ng2_bootstrap_1.DropdownModule, utils_module_1.UtilsModule, user_module_1.UserModule, smartadmin_widgets_module_1.SmartadminWidgetsModule],
            declarations: [chat_widget_component_1.ChatWidgetComponent, chat_component_1.ChatComponent, chat_users_component_1.ChatUsersComponent, chat_body_component_1.ChatBodyComponent, chat_form_component_1.ChatFormComponent, aside_chat_component_1.AsideChatComponent, aside_chat_user_component_1.AsideChatUserComponent],
            exports: [chat_widget_component_1.ChatWidgetComponent, aside_chat_component_1.AsideChatComponent, aside_chat_user_component_1.AsideChatUserComponent],
            providers: [chat_service_1.ChatService]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
