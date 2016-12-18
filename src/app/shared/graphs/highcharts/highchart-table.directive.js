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
var HighchartTable = (function () {
    function HighchartTable(el) {
        this.el = el;
    }
    HighchartTable.prototype.ngOnInit = function () {
        var _this = this;
        // to improve latency for big components smartadmin app we are loading some dependencies async
        System.import('script!highcharts').then(function () {
            return System.import('script!smartadmin-plugins/bower_components/highchartTable/jquery.highchartTable.js');
        }).then(function () {
            $(_this.el.nativeElement).highchartTable();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HighchartTable.prototype, "saHighchartTable", void 0);
    HighchartTable = __decorate([
        core_1.Directive({
            selector: '[saHighchartTable]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighchartTable);
    return HighchartTable;
}());
exports.HighchartTable = HighchartTable;
//# sourceMappingURL=highchart-table.directive.js.map