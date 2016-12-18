"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AsideChatComponent = (function () {
    function AsideChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.state = {
            open: false,
            filter: ''
        };
    }
    AsideChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users.map(function (it) {
                it.visible = true;
                return it;
            });
        });
    };
    AsideChatComponent.prototype.onFilter = function () {
        var _this = this;
        this.users.forEach(function (it) {
            if (!_this.state.filter) {
                it.visible = true;
            }
            else {
                it.visible = it.username.toLowerCase().indexOf(_this.state.filter.toLocaleLowerCase()) > -1;
            }
        });
    };
    AsideChatComponent.prototype.openToggle = function (e) {
        this.state.open = !this.state.open;
        $(this.chatUsersList.nativeElement).slideToggle();
        e.preventDefault();
    };
    __decorate([
        core_1.ViewChild('chatUsersList')
    ], AsideChatComponent.prototype, "chatUsersList", void 0);
    AsideChatComponent = __decorate([
        core_1.Component({
            selector: 'aside-chat',
            templateUrl: './aside-chat.component.html',
            styles: []
        })
    ], AsideChatComponent);
    return AsideChatComponent;
}());
exports.AsideChatComponent = AsideChatComponent;
