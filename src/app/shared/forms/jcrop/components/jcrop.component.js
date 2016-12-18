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
var crop_actions_1 = require("../actions/crop.actions");
var index_1 = require("ng2-redux/lib/index");
// import {Observable} from "rxjs";
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/skipWhile');
var options_actions_1 = require("../actions/options.actions");
require('jquery-jcrop/js/jquery.Jcrop.min.js');
var debounce = require('debounce');
var JcropComponent = (function () {
    function JcropComponent(ngRedux, cropActions, optionsActions) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.cropActions = cropActions;
        this.optionsActions = optionsActions;
        this.lastOptions = {};
        this.lastCrop = {};
        this.isMoving = false;
        this.isActive = false;
        this.onChange = function (crop) {
            _this.cropActions.cropChange(crop, _this.storeId);
        };
        this.onSelect = function (crop) {
            _this.cropActions.cropSelect(crop, _this.storeId);
        };
        this.onRelease = function (crop) {
            _this.isActive = false;
        };
    }
    JcropComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.optionsSub = this.ngRedux.select([this.storeId, 'options'])
            .subscribe(function (options) {
            if (!_this.api)
                return;
            var updates = Object.keys(options).reduce(function (_updates, key) {
                if (_this.lastOptions[key] != options[key]) {
                    _updates[key] = options[key];
                }
                return _updates;
            }, {});
            if (options.setImage) {
                options.src = options.setImage;
                self.api.disable();
                self.api.setImage(options.setImage);
                self.api.enable();
            }
            if (Object.keys(updates).length) {
                self.api.setOptions(updates);
                self.api.focus();
            }
            self.lastOptions = Object.assign({}, options);
        });
        this.cropSub = this.ngRedux.select([this.storeId, 'crop', 'selection']).skipWhile(function () {
            return self.isMoving;
        }).subscribe(function (crop) {
            if (!self.api)
                return;
            var options = self.ngRedux.getState()[self.storeId].options;
            var lc = self.lastCrop;
            if (crop &&
                crop.x &&
                crop.y &&
                crop.x2 &&
                crop.y2 && !self.isMoving &&
                (lc.x != crop.x ||
                    lc.y != crop.y ||
                    lc.x2 != crop.x2 ||
                    lc.y2 != crop.y2)) {
                self.lastCrop = Object.assign({}, crop);
                self.isMoving = true;
                if (options.animateTo) {
                    self.api.animateTo([crop.x, crop.y, crop.x2, crop.y2], function () {
                        self.isMoving = false;
                    });
                }
                else {
                    self.api.setSelect([crop.x, crop.y, crop.x2, crop.y2]);
                    self.isMoving = false;
                }
            }
        });
        this.render();
    };
    JcropComponent.prototype.render = function () {
        var self = this;
        var element = jQuery(this.jcropImage.nativeElement);
        var container = jQuery(this.jcropContainer.nativeElement);
        element.Jcrop({
            onChange: this.onChange,
            onSelect: this.onSelect,
            onRelease: this.onRelease,
        }, function () {
            self.api = this;
            var initializingOptions = Object.assign({}, {
                width: self.width,
                height: self.height,
                src: self.src,
            }, self.options || {});
            if (initializingOptions.setSelect) {
                self.cropActions.cropSelect(initializingOptions.setSelect, self.storeId);
            }
            else {
                self.cropActions.cropRandomSelection(self.storeId);
            }
            self.optionsActions.setOptions({
                options: initializingOptions,
                storeId: self.storeId
            });
        });
    };
    JcropComponent.prototype.ngOnDestroy = function () {
        this.optionsSub.unsubscribe();
        this.cropSub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], JcropComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JcropComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JcropComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JcropComponent.prototype, "storeId", void 0);
    __decorate([
        core_1.ViewChild('jcropImage'), 
        __metadata('design:type', Object)
    ], JcropComponent.prototype, "jcropImage", void 0);
    __decorate([
        core_1.ViewChild('jcropContainer'), 
        __metadata('design:type', Object)
    ], JcropComponent.prototype, "jcropContainer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JcropComponent.prototype, "options", void 0);
    JcropComponent = __decorate([
        core_1.Component({
            selector: 'jcrop',
            template: "\n    <div #jcropContainer [ngStyle]=\"{\n      width: width + 'px',\n      height: height + 'px'\n    }\">\n        <img #jcropImage [src]=\"src\" [width]=\"width\" [height]=\"height\" />\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [index_1.NgRedux, crop_actions_1.CropActions, options_actions_1.OptionsActions])
    ], JcropComponent);
    return JcropComponent;
}());
exports.JcropComponent = JcropComponent;
//# sourceMappingURL=jcrop.component.js.map