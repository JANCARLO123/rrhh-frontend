"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChatFormComponent = (function () {
    function ChatFormComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.message = '';
        this.enterToSend = false;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.messageToSubject.subscribe(function (user) {
            _this.message += (user.username + ', ');
        });
        this.user = this.userService.userInfo;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    ChatFormComponent.prototype.sendMessage = function () {
        if (this.message.trim() == '')
            return;
        this.chatService.sendMessage({
            body: this.message,
            user: this.user,
            date: new Date()
        });
        this.message = '';
    };
    ChatFormComponent.prototype.sendMessageEnter = function () {
        if (this.enterToSend) {
            this.sendMessage();
        }
    };
    ChatFormComponent = __decorate([
        core_1.Component({
            selector: 'chat-form',
            templateUrl: './chat-form.component.html',
        })
    ], ChatFormComponent);
    return ChatFormComponent;
}());
exports.ChatFormComponent = ChatFormComponent;
