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
var CommentFormComponent = (function () {
    function CommentFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    url: true
                },
                comment: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Enter your name',
                },
                email: {
                    required: 'Enter your email address',
                    email: 'Enter a VALID email'
                },
                url: {
                    email: 'Enter a VALID url'
                },
                comment: {
                    required: 'Please enter your comment'
                }
            }
        };
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-comment-form',
            templateUrl: 'comment-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map