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
var FlagsComponent = (function () {
    function FlagsComponent(el) {
        this.el = el;
        this.search = '';
    }
    FlagsComponent.prototype.ngOnInit = function () {
        this.containers = this.el.nativeElement.querySelectorAll('.demo-icon-font');
    };
    FlagsComponent.prototype.onKey = function (event) {
        var _this = this;
        this.search = event.target.value;
        Array.prototype.forEach.call(this.containers, function (container) {
            if (container.querySelectorAll('[class*="' + _this.search + '"]').length > 0 ||
                (_this.search.length > 1 && container.innerHTML.toLowerCase().search(_this.search) > -1)) {
                container.style.display = 'block';
            }
            else {
                if (_this.search) {
                    container.style.display = 'none';
                }
                else {
                    container.style.display = 'block';
                }
            }
        });
    };
    FlagsComponent = __decorate([
        core_1.Component({
            selector: 'sa-flags',
            templateUrl: 'flags.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FlagsComponent);
    return FlagsComponent;
}());
exports.FlagsComponent = FlagsComponent;
//# sourceMappingURL=flags.component.js.map