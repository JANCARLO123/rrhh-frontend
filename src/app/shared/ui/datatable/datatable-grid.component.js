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
var DatatableGridComponent = (function () {
    function DatatableGridComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    DatatableGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            System.import('script!smartadmin-plugins/datatables-bundle/datatables.min.js'),
        ]).then(function () {
            _this.render();
        });
    };
    DatatableGridComponent.prototype.render = function () {
        var element = $(this.el.nativeElement.children[0]);
        var options = this.options || {};
        var toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.paginationLength)
            toolbar += 'l';
        if (this.columnsHide)
            toolbar += 'C';
        if (typeof options.ajax === 'string') {
            var url = options.ajax;
            options.ajax = {
                url: url,
            };
        }
        options = $.extend(options, {
            "dom": //"<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
            "t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
                "sLengthMenu": "_MENU_"
            },
            "autoWidth": false,
            retrieve: true,
            responsive: true,
            initComplete: function (settings, json) {
                element.parent().find('.input-sm').removeClass("input-sm").addClass('input-md');
            }
        });
        var _dataTable = element.DataTable(options);
        if (this.detailsFormat) {
            var format_1 = this.detailsFormat;
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = _dataTable.row(tr);
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child(format_1(row.data())).show();
                    tr.addClass('shown');
                }
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableGridComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableGridComponent.prototype, "detailsFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableGridComponent.prototype, "paginationLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableGridComponent.prototype, "columnsHide", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableGridComponent.prototype, "tableClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableGridComponent.prototype, "width", void 0);
    DatatableGridComponent = __decorate([
        core_1.Component({
            selector: 'rk-datatable-runakuna',
            template: "\n      <table class=\"dataTable {{tableClass}}\" width=\"{{width}}\">\n        <ng-content></ng-content>\n      </table>\n",
            styles: [
                require('smartadmin-plugins/datatables-bundle/datatables.min.css')
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DatatableGridComponent);
    return DatatableGridComponent;
}());
exports.DatatableGridComponent = DatatableGridComponent;
//# sourceMappingURL=datatable-grid.component.js.map