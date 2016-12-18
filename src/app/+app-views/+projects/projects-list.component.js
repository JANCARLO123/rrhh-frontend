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
var ProjectsListComponent = (function () {
    function ProjectsListComponent() {
        this.options = {
            "ajax": 'assets/api/project-list.json',
            "iDisplayLength": 15,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "name" },
                { "data": "est" },
                { "data": "contacts" },
                { "data": "status" },
                { "data": "target-actual" },
                { "data": "starts" },
                { "data": "ends" },
                { "data": "tracker" }
            ],
            "order": [[1, 'asc']]
        };
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
    };
    ProjectsListComponent.prototype.detailsFormat = function (d) {
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n            <tbody><tr>\n                <td style=\"width:100px\">Project Title:</td>\n                <td>" + d.name + "</td>\n            </tr>\n            <tr>\n                <td>Deadline:</td>\n                <td>" + d.ends + "</td>\n            </tr>\n            <tr>\n                <td>Extra info:</td>\n                <td>And any further details here (images etc)...</td>\n            </tr>\n            <tr>\n                <td>Comments:</td>\n                <td>" + d.comments + "</td>\n            </tr>\n            <tr>\n                <td>Action:</td>\n                <td>" + d.action + "</td>\n            </tr></tbody>\n        </table>";
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            templateUrl: './projects-list.component.html',
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map