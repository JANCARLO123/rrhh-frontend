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
var core_1 = require("@angular/core");
var general_view_component_1 = require("./+forum/general-view/general-view.component");
var post_view_component_1 = require("./+forum/post-view/post-view.component");
var topic_view_component_1 = require("./+forum/topic-view/topic-view.component");
var profile_component_1 = require("./+profile/profile.component");
var app_views_routing_1 = require("./app-views.routing");
var smartadmin_module_1 = require("../shared/smartadmin.module");
var blog_component_1 = require('./+blog/blog.component');
var projects_list_component_1 = require('./+projects/projects-list.component');
var gallery_demo_component_1 = require('./+gallery/gallery-demo.component');
var timeline_component_1 = require('./+timeline/timeline.component');
var smartadmin_datatable_module_1 = require("../shared/ui/datatable/smartadmin-datatable.module");
var gallery_module_1 = require("../shared/ui/gallery/gallery.module");
var AppViewsModule = (function () {
    function AppViewsModule() {
    }
    AppViewsModule = __decorate([
        core_1.NgModule({
            declarations: [
                general_view_component_1.GeneralViewComponent,
                post_view_component_1.PostViewComponent,
                topic_view_component_1.TopicViewComponent,
                profile_component_1.ProfileComponent,
                blog_component_1.BlogComponent,
                projects_list_component_1.ProjectsListComponent,
                gallery_demo_component_1.GalleryDemoComponent,
                timeline_component_1.TimelineComponent,
            ],
            imports: [
                smartadmin_module_1.SmartadminModule,
                app_views_routing_1.routing,
                smartadmin_datatable_module_1.SmartadminDatatableModule,
                gallery_module_1.SmartadminGalleryModule,
            ],
            entryComponents: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppViewsModule);
    return AppViewsModule;
}());
exports.AppViewsModule = AppViewsModule;
//# sourceMappingURL=app-views.module.js.map