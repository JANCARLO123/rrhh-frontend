import { Routes, RouterModule } from '@angular/router';
import {EmpleadoComponent} from "./empleado.component";

import {GridEditFormComponent} from "./dialog.component";

//import {GridEditFormComponent } from "./grid.component";

export const empleadoRoutes: Routes = [{
  path: '',
  component: EmpleadoComponent
}];

export const empleadoRouting = RouterModule.forChild(empleadoRoutes);

