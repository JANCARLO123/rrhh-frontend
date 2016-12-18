import {RouterModule, Routes} from "@angular/router";
import {BusquedaMarcacionComponent} from "./+busqueda-marcacion/busqueda.marcacion.component";
import {BusquedaHorarioComponent} from "./+busqueda-horario/busqueda.horario.component";
import {AdministrarHorarioComponent} from "./+administrar-horario/administrar.horario.component";


export const gestionTiempoRoutes: Routes = [
  {
    path: '',
    redirectTo: 'busquedaMarcacion',
    pathMatch: 'full'
  },
  {
    path: 'busquedaMarcaciones',
    component: BusquedaMarcacionComponent
  },
  {
    path: 'busquedaHorarios',
    component: BusquedaHorarioComponent
  },
  {
    path: 'administrarHorario',
    component: AdministrarHorarioComponent
  }

];
export const gestionTiempoRouting = RouterModule.forChild(gestionTiempoRoutes)