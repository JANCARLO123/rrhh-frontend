import {RouterModule, Routes} from "@angular/router";
import {BusquedaEmpleadoComponent} from "./+busqueda-empleado/busqueda.empleado.component";
import {VerEmpleadoComponent} from "./+ver-empleado/ver.empleado.component";
import {EmpleadoComponent} from "./+empleado/empleado.component";
import {DarbajaComponent} from "./+empleado-darBaja/empleado.darBaja.component";
import {BusquedaPermisosComponent} from "./+permisos/busqueda.permisos.component";
import {BusquedaVacacionesComponent} from "./+busqueda-vacacion/busqueda.vacacion.component";
import {BusquedaHorasExtrasComponent} from "./+busqueda-horas-extras/busqueda.horas.extras.component";
import {AdministrarVacacionesComponent} from "./+administrar-vacacion/administrarVacaciones.component";
import {AdministrarPermisoComponent} from "./+administrar-permisos/administrar.permiso.component";
import {AdministrarHorasExtraComponent} from "./+administrar-horas-extras/administrarHorasExtras.component";

import {CargoComponent} from './+cargo/cargo.component';
import {HistoriaLaboralComponent} from './+historiaLaboral/historiaLaboral.component';
import {EditCargoComponent} from './+edit-cargo/cargo-edit.component';
import {HorarioEmpleadoComponent} from "./+horario-empleado/horario.empleado.component";
import {AdministrarHorarioEmpleadoComponent} from "./+administrar-horario-empleado/administrar.horario.empleado.component";

export const personalRoutes: Routes = [
  {
    path: '',
    redirectTo: 'busquedaEmpleado',
    pathMatch: 'full'
  },
  {
    path: 'busquedaEmpleado',
    component: BusquedaEmpleadoComponent
  },
  {
    path: 'busquedaPermisos',
    component: BusquedaPermisosComponent
  },
  {
    path: 'busquedaVacaciones',
    component: BusquedaVacacionesComponent
  },
  {
    path: 'busquedaHorasExtras',
    component: BusquedaHorasExtrasComponent
  },
  {
    path: 'administrarVacaciones',
    component: AdministrarVacacionesComponent
  },
  {
    path: 'administrarHorasExtra',
    component: AdministrarHorasExtraComponent
  },
  {
    path: 'administrarPermiso',
    component: AdministrarPermisoComponent
  },
  {
    path: 'verEmpleado',
    component: VerEmpleadoComponent
  },
  {
    path: 'empleado',
    component: EmpleadoComponent
  },
  {
    path: 'darDeBaja',
    component: DarbajaComponent
  },
  {
    path: 'historiaLaboral',
    component: HistoriaLaboralComponent
  },
  {
    path: 'editarCargo',
    component: EditCargoComponent
  },
  {
    path: 'nuevoCargo',
    component: CargoComponent
  },
  {
    path: 'horarioEmpleado',
    component: HorarioEmpleadoComponent
  },
  {
    path: 'administrarHorarioEmpleado',
    component: AdministrarHorarioEmpleadoComponent
  }

];
export const personalRouting = RouterModule.forChild(personalRoutes)