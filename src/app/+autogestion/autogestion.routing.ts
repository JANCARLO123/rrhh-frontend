import {RouterModule, Routes} from "@angular/router";
import {PermisoComponent} from "./+solicitar-permiso/permiso.component";
import {AgendarVacacionesComponent} from "./+agendar-vacaciones/agendarVacaciones.component";
import {DatosPersonalesComponent} from "./+datos-personales/datos.personales.component";
import {SolicitarHorasExtraComponent} from "./+solicitar-horas-extra/solicitarHorasExtras.component";
import {SolicitarCorreccionComponent} from "./+solicitar-correccion/solicitar.correccion.component";

export const autogestionRoutes: Routes = [
  {
    path: '',
    redirectTo: 'solicitarPermiso',
    pathMatch: 'full'
  },
  {
    path: 'actualizarDatosPersonales',
    component: DatosPersonalesComponent
  },
  {
    path: 'solicitarPermiso',
    component: PermisoComponent
  },
  {
    path: 'agendarVacaciones',
    component: AgendarVacacionesComponent
  },
  {
    path: 'solicitarCorreccion',
    component: SolicitarCorreccionComponent
  },
  {
    path: 'solicitarHorasExtra',
    component: SolicitarHorasExtraComponent
  }
];

export const autogestionRouting = RouterModule.forChild(autogestionRoutes)
