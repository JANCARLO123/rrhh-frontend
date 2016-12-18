import {RouterModule, Routes} from "@angular/router";
import {GeneralViewComponent} from "./+forum/general-view/general-view.component";
import {PostViewComponent} from "./+forum/post-view/post-view.component";
import {TopicViewComponent} from "./+forum/topic-view/topic-view.component";
import {ProfileComponent} from "./+profile/profile.component";
import {BlogComponent} from "./+blog/blog.component";
import {GalleryDemoComponent} from "./+gallery/gallery-demo.component";
import {TimelineComponent} from "./+timeline/timeline.component";
import {ProjectsListComponent} from "./+projects/projects-list.component";


export const routes:Routes = [
  {
    path: 'forum',
    children: [
      {
        path: 'general-view',
        component: GeneralViewComponent
      },

      {
        path: 'post-view',
        component: PostViewComponent
      },

      {
        path: 'topic-view',
        component: TopicViewComponent
      },
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'gallery',
    component: GalleryDemoComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'projects',
    component: ProjectsListComponent
  },

];

export const routing = RouterModule.forChild(routes);
