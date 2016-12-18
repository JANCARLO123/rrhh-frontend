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
var XEditableComponent = (function () {
    function XEditableComponent(el) {
        this.el = el;
        this.model = '';
        this.modelChange = new core_1.EventEmitter();
        this.type = 'text';
        this.disabled = false;
        this.widgetId = 'x-editable' + XEditableComponent.widgetsCounter++;
    }
    XEditableComponent.prototype.ngOnInit = function () {
        var _this = this;
        System.import('X-editable/dist/bootstrap3-editable/js/bootstrap-editable.js').then(function () {
            _this.render();
        });
    };
    XEditableComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this._options && ['type',
            'placement',
            'mode',
            'value',
            'disabled',
            'placeholder',
            'originalTitle',
            'source',
            'showbuttons',
            'template',
            'viewformat',
            'format',
            'pk',
        ].some(function (it) {
            return _this._options[it] != _this[it];
        })) {
            this.render();
        }
    };
    XEditableComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var options = {
            type: this.type,
            placement: this.placement,
            mode: this.mode,
            value: this.value,
            disabled: this.disabled,
            placeholder: this.placeholder,
            originalTitle: this.originalTitle,
            source: this.source,
            showbuttons: this.showbuttons,
            template: this.template,
            viewformat: this.viewformat,
            format: this.format,
            pk: this.pk,
        };
        element.editable('destroy');
        element.editable(options);
        element.on('save', function (e, params) {
            _this.model = params.newValue;
            _this.modelChange.emit(params.newValue);
        });
        this._options = options;
    };
    XEditableComponent.widgetsCounter = 0;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "modelChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "placement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "originalTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "source", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "showbuttons", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "viewformat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "className", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], XEditableComponent.prototype, "pk", void 0);
    XEditableComponent = __decorate([
        core_1.Component({
            selector: 'x-editable',
            template: '<a attr.id="{{widgetId}}" class="{{className}}"><ng-content></ng-content>{{model }}</a>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], XEditableComponent);
    return XEditableComponent;
}());
exports.XEditableComponent = XEditableComponent;
//# sourceMappingURL=x-editable.component.js.map