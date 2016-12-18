import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "./calendar.component";

export const routes:Routes = [

  {
    path: '',
    component: CalendarComponent
  },


];

export const routing = RouterModule.forChild(routes);
