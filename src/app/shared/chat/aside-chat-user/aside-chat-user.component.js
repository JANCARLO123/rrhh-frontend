"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var aside_chat_boxes_1 = require('../aside-chat/aside-chat-boxes');
var AsideChatUserComponent = (function () {
    function AsideChatUserComponent() {
        this.user = {};
        this.state = {
            chatId: 'chatbox-user-' + AsideChatUserComponent.idCounter++
        };
    }
    AsideChatUserComponent.prototype.ngOnInit = function () {
    };
    AsideChatUserComponent.prototype.openChatBox = function (e) {
        e.preventDefault();
        var user = this.user;
        var _a = user.username.split(/ /), firstname = _a[0], lastname = _a[1];
        var id = this.state.chatId;
        if (user.status != 'ofline') {
            aside_chat_boxes_1.chatboxManager.addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
            });
        }
    };
    AsideChatUserComponent.idCounter = 0;
    __decorate([
        core_1.Input()
    ], AsideChatUserComponent.prototype, "user", void 0);
    AsideChatUserComponent = __decorate([
        core_1.Component({
            selector: 'aside-chat-user',
            templateUrl: './aside-chat-user.component.html',
        })
    ], AsideChatUserComponent);
    return AsideChatUserComponent;
}());
exports.AsideChatUserComponent = AsideChatUserComponent;
