import {NgModule} from "@angular/core";

import {GeneralViewComponent} from "./+forum/general-view/general-view.component";
import {PostViewComponent} from "./+forum/post-view/post-view.component";
import {TopicViewComponent} from "./+forum/topic-view/topic-view.component";
import {ProfileComponent} from "./+profile/profile.component";

import {routing} from "./app-views.routing";
import {SmartadminModule} from "../shared/smartadmin.module";
import { BlogComponent } from './+blog/blog.component';
import { ProjectsListComponent } from './+projects/projects-list.component';
import { GalleryDemoComponent } from './+gallery/gallery-demo.component';
import { TimelineComponent } from './+timeline/timeline.component';
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import {SmartadminGalleryModule} from "../shared/ui/gallery/gallery.module";

@NgModule({
  declarations: [
    GeneralViewComponent,
    PostViewComponent,
    TopicViewComponent,
    ProfileComponent,
    BlogComponent,
    ProjectsListComponent,
    GalleryDemoComponent,
    TimelineComponent,

  ],
  imports: [
    SmartadminModule,
    routing,
    SmartadminDatatableModule,
    SmartadminGalleryModule,
  ],
  entryComponents: []
})
export class AppViewsModule {
}
