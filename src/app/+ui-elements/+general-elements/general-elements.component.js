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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var di_1 = require("@angular/core/src/metadata/di");
var GeneralElementsComponent = (function () {
    function GeneralElementsComponent() {
        this.state = {
            tabs: {
                demo1: 0,
                demo2: 'tab-r1',
                demo3: 'hr1',
                demo4: 'AA',
                demo5: 'iss1',
                demo6: 'l1',
                demo7: 'tab1',
                demo8: 'hb1',
                demo9: 'A1',
                demo10: 'is1'
            },
            carousel: {
                demo1: {
                    interval: 2000,
                    noWrap: false,
                    slides: [
                        {
                            title: 'Title 1',
                            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m3.jpg',
                        },
                        {
                            title: 'Title 2',
                            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m2.jpg',
                        },
                        {
                            title: 'Title 3',
                            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m1.jpg',
                        },
                    ]
                },
                demo2: {
                    interval: 3000,
                    noWrap: false,
                    slides: [
                        {
                            title: 'Title 2',
                            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m2.jpg',
                        },
                        {
                            title: 'Title 1',
                            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m3.jpg',
                        },
                        {
                            title: 'Title 3',
                            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
                            src: 'assets/img/demo/m1.jpg',
                        },
                    ]
                }
            }
        };
    }
    GeneralElementsComponent.prototype.ngOnInit = function () {
    };
    GeneralElementsComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    GeneralElementsComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    GeneralElementsComponent.prototype.notificationExample1 = function () {
        $.bigBox({
            title: "Big Information box",
            content: "This message will dissapear in 6 seconds!",
            color: "#C46A69",
            //timeout: 6000,
            icon: "fa fa-warning shake animated",
            number: "1",
            timeout: 6000
        });
    };
    GeneralElementsComponent.prototype.notificationExample2 = function () {
        $.bigBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#3276B1",
            //timeout: 8000,
            icon: "fa fa-bell swing animated",
            number: "2"
        });
    };
    GeneralElementsComponent.prototype.notificationExample3 = function () {
        $.bigBox({
            title: "Shield is up and running!",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#C79121",
            //timeout: 8000,
            icon: "fa fa-shield fadeInLeft animated",
            number: "3"
        });
    };
    GeneralElementsComponent.prototype.notificationExample4 = function () {
        var _this = this;
        $.bigBox({
            title: "Success Message Example",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#739E73",
            //timeout: 8000,
            icon: "fa fa-check",
            number: "4"
        }, function () {
            _this._closedthis();
        });
    };
    GeneralElementsComponent.prototype.notificationExample5 = function () {
        $.smallBox({
            title: "Ding Dong!",
            content: "Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
    };
    GeneralElementsComponent.prototype.notificationExample6 = function () {
        $.smallBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#5384AF",
            //timeout: 8000,
            icon: "fa fa-bell"
        });
    };
    GeneralElementsComponent.prototype.notificationExample7 = function () {
        $.smallBox({
            title: "James Simmons liked your comment",
            content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });
    };
    GeneralElementsComponent.prototype._closedthis = function () {
        $.smallBox({
            title: "Great! You just closed that last alert!",
            content: "This message will be gone in 5 seconds!",
            color: "#739E73",
            iconSmall: "fa fa-cloud",
            timeout: 5000
        });
    };
    GeneralElementsComponent.prototype.smartModEg1 = function () {
        $.SmartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed === "Yes") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                    color: "#659265",
                    iconSmall: "fa fa-check fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
            if (ButtonPressed === "No") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                    color: "#C46A69",
                    iconSmall: "fa fa-times fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
        });
    };
    GeneralElementsComponent.prototype.smartModEg2 = function () {
        $.SmartMessageBox({
            title: "Smart Alert: Input",
            content: "Please enter your user name",
            buttons: "[Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    };
    GeneralElementsComponent.prototype.smartModEg3 = function () {
        $.SmartMessageBox({
            title: "Smart Notification: Buttons",
            content: "Lots of buttons to go...",
            buttons: '[Need?][You][Do][Buttons][Many][How]'
        });
    };
    GeneralElementsComponent.prototype.smartModEg4 = function () {
        $.SmartMessageBox({
            title: "Smart Alert: Select",
            content: "You can even create a group of options.",
            buttons: "[Done]",
            input: "select",
            options: "[Costa Rica][United States][Autralia][Spain]"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    };
    GeneralElementsComponent.prototype.smartModEg5 = function () {
        $.SmartMessageBox({
            title: "Login form",
            content: "Please enter your user name",
            buttons: "[Cancel][Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            if (ButtonPress == "Cancel") {
                alert("Why did you cancel that? :(");
                return 0;
            }
            var Value1 = Value.toUpperCase();
            var ValueOriginal = Value;
            $.SmartMessageBox({
                title: "Hey! <strong>" + Value1 + ",</strong>",
                content: "And now please provide your password:",
                buttons: "[Login]",
                input: "password",
                placeholder: "Password"
            }, function (ButtonPress, Value) {
                alert("Username: " + ValueOriginal + " and your password is: " + Value);
            });
        });
    };
    __decorate([
        di_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], GeneralElementsComponent.prototype, "lgModal", void 0);
    GeneralElementsComponent = __decorate([
        core_1.Component({
            selector: 'sa-general-elements',
            templateUrl: 'general-elements.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], GeneralElementsComponent);
    return GeneralElementsComponent;
}());
exports.GeneralElementsComponent = GeneralElementsComponent;
//# sourceMappingURL=general-elements.component.js.map