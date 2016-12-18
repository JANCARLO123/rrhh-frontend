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
var JqueryUiComponent = (function () {
    function JqueryUiComponent() {
        var _this = this;
        this.demoAutocompleteWords = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"];
        this.ajaxAutocompleteOptions = {
            source: function (request, response) {
                jQuery.ajax({
                    url: "https://jqueryui.com/resources/demos/autocomplete/search.php",
                    dataType: "jsonp",
                    data: {
                        term: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            minLength: 2,
            select: function (event, ui) {
                console.log("Selected: " + ui.item.value + " aka " + ui.item.id);
                _this.ajaxAutocompleteSelected = ui.item.id;
            }
        };
    }
    JqueryUiComponent.prototype.ngOnInit = function () {
    };
    JqueryUiComponent = __decorate([
        core_1.Component({
            selector: 'sa-jquery-ui',
            templateUrl: 'jquery-ui.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], JqueryUiComponent);
    return JqueryUiComponent;
}());
exports.JqueryUiComponent = JqueryUiComponent;
//# sourceMappingURL=jquery-ui.component.js.map