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
var GlyphiconsComponent = (function () {
    function GlyphiconsComponent(el) {
        this.el = el;
        this.search = '';
    }
    GlyphiconsComponent.prototype.ngOnInit = function () {
        this.containers = this.el.nativeElement.querySelectorAll('.bs-glyphicons li');
    };
    GlyphiconsComponent.prototype.onKey = function (event) {
        var _this = this;
        this.search = event.target.value;
        Array.prototype.forEach.call(this.containers, function (container) {
            if (container.querySelectorAll('[class*="' + _this.search + '"]').length > 0) {
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
    GlyphiconsComponent = __decorate([
        core_1.Component({
            selector: 'sa-glyphicons',
            templateUrl: 'glyphicons.component.html',
            styleUrls: ['glyphicons.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GlyphiconsComponent);
    return GlyphiconsComponent;
}());
exports.GlyphiconsComponent = GlyphiconsComponent;
//# sourceMappingURL=glyphicons.component.js.map