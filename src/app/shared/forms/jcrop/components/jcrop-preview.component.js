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
var directives_1 = require("@angular/core/src/metadata/directives");
var ng2_redux_1 = require("ng2-redux");
var JcropPreviewComponent = (function () {
    function JcropPreviewComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.active = false;
    }
    JcropPreviewComponent.prototype.ngOnInit = function () {
        var self = this;
        this.optionsSub = this.ngRedux
            .select([this.storeId, 'options'])
            .subscribe(function (options) {
            if (options) {
                self.active = !!options.showThumbnail;
                self.previewSrc = options.src;
                self.options = options;
                self.size = options.thumbnailSize + 'px';
            }
        });
        this.cropSub = this.ngRedux.select([this.storeId, 'crop', 'change'])
            .subscribe(function (crop) {
            if (crop && self.active) {
                self.crop = crop;
            }
        });
    };
    JcropPreviewComponent.prototype.ngOnDestroy = function () {
        this.optionsSub.unsubscribe();
        this.cropSub.unsubscribe();
    };
    JcropPreviewComponent.prototype.setContainerStyles = function () {
        var options = this.options;
        var crop = this.crop;
        if (crop && crop.w > 0) {
            var size = options.thumbnailSize;
            var width = crop.h <= crop.w ? size : crop.w / crop.h * size;
            var height = crop.h > crop.w ? size : crop.h / crop.w * size;
            return {
                width: Math.round(width) + 'px',
                height: Math.round(height) + 'px'
            };
        }
        else {
            return {};
        }
    };
    JcropPreviewComponent.prototype.setImgStyles = function () {
        var crop = this.crop;
        var options = this.options;
        if (crop && crop.w > 0) {
            var rx = options.width / crop.w;
            var ry = options.height / crop.h;
            var size = options.thumbnailSize;
            var width = crop.h <= crop.w ? size : crop.w / crop.h * size;
            var height = crop.h > crop.w ? size : crop.h / crop.w * size;
            return {
                width: Math.round(rx * width) + 'px',
                height: Math.round(ry * height) + 'px',
                marginLeft: '-' + Math.round(width / crop.w * crop.x) + 'px',
                marginTop: '-' + Math.round(height / crop.h * crop.y) + 'px'
            };
        }
        else {
            return {};
        }
    };
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', String)
    ], JcropPreviewComponent.prototype, "storeId", void 0);
    JcropPreviewComponent = __decorate([
        core_1.Component({
            selector: 'jcrop-preview',
            template: "\n    <div class=\"jcrop-preview-container\" [class.active]=\"active\" [ngStyle]=\"{\n        width: size,\n        height: size\n    }\">\n      <div class=\"jcrop-preview\" [ngStyle]=\"setContainerStyles()\" *ngIf=\"active\">\n        <img [ngStyle]=\"setImgStyles()\" [src]=\"previewSrc\">\n      </div>\n    </div>\n  ",
            styles: ["\n  .jcrop-preview-container{          \n      position: relative;\n  }\n  .jcrop-preview-container.active{\n      box-shadow: 0 0 1px rgba(111,111,111, .7);       \n  }\n  .jcrop-preview{\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      position: relative;\n      overflow: hidden;\n  }\n  .jcrop-preview img{\n      position: absolute;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], JcropPreviewComponent);
    return JcropPreviewComponent;
}());
exports.JcropPreviewComponent = JcropPreviewComponent;
//# sourceMappingURL=jcrop-preview.component.js.map