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
var UiValidateDirective = (function () {
    function UiValidateDirective(el) {
        var _this = this;
        this.el = el;
        System.import('script!jquery-validation').then(function () {
            _this.attach();
        });
    }
    UiValidateDirective.prototype.attach = function () {
        var $form = $(this.el.nativeElement);
        var validateCommonOptions = {
            rules: {},
            messages: {},
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function (element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                }
                else {
                    error.insertAfter(element);
                }
            }
        };
        $form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
            var $input = $(this), fieldName = $input.attr('name');
            validateCommonOptions.rules[fieldName] = {};
            if ($input.data('required') != undefined) {
                validateCommonOptions.rules[fieldName].required = true;
            }
            if ($input.data('email') != undefined) {
                validateCommonOptions.rules[fieldName].email = true;
            }
            if ($input.data('maxlength') != undefined) {
                validateCommonOptions.rules[fieldName].maxlength = $input.data('maxlength');
            }
            if ($input.data('minlength') != undefined) {
                validateCommonOptions.rules[fieldName].minlength = $input.data('minlength');
            }
            if ($input.data('message')) {
                validateCommonOptions.messages[fieldName] = $input.data('message');
            }
            else {
                Object.keys($input.data()).forEach(function (key) {
                    if (key.search(/message/) == 0) {
                        if (!validateCommonOptions.messages[fieldName])
                            validateCommonOptions.messages[fieldName] = {};
                        var messageKey = key.toLowerCase().replace(/^message/, '');
                        validateCommonOptions.messages[fieldName][messageKey] = $input.data(key);
                    }
                });
            }
        });
        $form.validate($.extend(validateCommonOptions, this.saUiValidate));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UiValidateDirective.prototype, "saUiValidate", void 0);
    UiValidateDirective = __decorate([
        core_1.Directive({
            selector: '[saUiValidate]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], UiValidateDirective);
    return UiValidateDirective;
}());
exports.UiValidateDirective = UiValidateDirective;
//# sourceMappingURL=ui-validate.directive.js.map