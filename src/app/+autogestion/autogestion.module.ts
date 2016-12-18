import {NgModule} from "@angular/core";

import {autogestionRouting} from './autogestion.routing';
import {PermisoModule} from "./+solicitar-permiso/permiso.module";
import {PermisoService} from "./+solicitar-permiso/permiso.service";
import {AgendarVacacionesModule} from "./+agendar-vacaciones/agendarVacaciones.module";
import {DatosPersonalesModule} from "./+datos-personales/datos.personales.module";
import {EmpleadoService} from "../+personal/+empleado/empleado.service";
import {AdministrarHorasExtraModule} from "./+solicitar-horas-extra/solicitarHorasExtras.module";
import {SolicitarCorreccionModule} from "./+solicitar-correccion/solicitar.correccion.module";

@NgModule({
  declarations: [
  ],
  imports: [
      autogestionRouting,
      PermisoModule,
      AgendarVacacionesModule,
      DatosPersonalesModule,
      AdministrarHorasExtraModule,
      SolicitarCorreccionModule
  ],
  providers: [
    PermisoService,
    EmpleadoService
  ],
})
export class AutogestionModule {}
