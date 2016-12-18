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
var world_mill_1 = require("./world-mill");
var VectorMapComponent = (function () {
    function VectorMapComponent(el) {
        this.el = el;
    }
    VectorMapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        System.import('jvectormap/jquery-jvectormap.min.js').then(function () {
            $.fn.vectorMap('addMap', 'world_mill', world_mill_1.WORLD_MILL);
            _this.render();
        });
    };
    VectorMapComponent.prototype.render = function () {
        var _this = this;
        var $vectorMap = $('.vector-map-pane', this.el.nativeElement).vectorMap({
            map: 'world_mill',
            backgroundColor: 'white',
            series: {
                regions: [{
                        values: this.data,
                        scale: ['#C8EEFF', '#0071A4'],
                        normalizeFunction: 'polynomial'
                    }]
            },
            onRegionTipShow: function (e, el, code) {
                el.html(el.html() + ' (GDP - ' + _this.data[code] + ')');
            }
        });
        this.mapObject = $vectorMap.vectorMap('get', 'mapObject');
        $('.jvectormap-zoomin', this.el.nativeElement).html('<i class="fa fa-plus"></i>');
        $('.jvectormap-zoomout', this.el.nativeElement).html('<i class="fa fa-minus"></i>');
    };
    VectorMapComponent.prototype.ngOnDestroy = function () {
        this.mapObject && this.mapObject.remove();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VectorMapComponent.prototype, "data", void 0);
    VectorMapComponent = __decorate([
        core_1.Component({
            selector: 'vector-map',
            template: '<div class="vector-map vector-map-pane" style="height: 300px;"></div>',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], VectorMapComponent);
    return VectorMapComponent;
}());
exports.VectorMapComponent = VectorMapComponent;
//# sourceMappingURL=vector-map.component.js.map