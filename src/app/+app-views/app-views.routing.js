"use strict";
var router_1 = require("@angular/router");
var general_view_component_1 = require("./+forum/general-view/general-view.component");
var post_view_component_1 = require("./+forum/post-view/post-view.component");
var topic_view_component_1 = require("./+forum/topic-view/topic-view.component");
var profile_component_1 = require("./+profile/profile.component");
var blog_component_1 = require("./+blog/blog.component");
var gallery_demo_component_1 = require("./+gallery/gallery-demo.component");
var timeline_component_1 = require("./+timeline/timeline.component");
var projects_list_component_1 = require("./+projects/projects-list.component");
exports.routes = [
    {
        path: 'forum',
        children: [
            {
                path: 'general-view',
                component: general_view_component_1.GeneralViewComponent
            },
            {
                path: 'post-view',
                component: post_view_component_1.PostViewComponent
            },
            {
                path: 'topic-view',
                component: topic_view_component_1.TopicViewComponent
            },
        ]
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'gallery',
        component: gallery_demo_component_1.GalleryDemoComponent
    },
    {
        path: 'timeline',
        component: timeline_component_1.TimelineComponent
    },
    {
        path: 'projects',
        component: projects_list_component_1.ProjectsListComponent
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=app-views.routing.js.map