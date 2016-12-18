import {NgModule} from "@angular/core";
import {personalRouting} from './personal.routing';
import {VerEmpleadoModule} from "./+ver-empleado/ver.empleado.module";
import {BusquedaEmpleadoModule} from "./+busqueda-empleado/busqueda.empleado.module";
import {BusquedaEmpleadoComponent} from "./+busqueda-empleado/busqueda.empleado.component";
import {EmpleadoService} from "./+empleado/empleado.service";
import {EmpleadoModule} from "./+empleado/empleado.module";
import {DarBajaModule} from "./+empleado-darBaja/empleado.darBaja.module";
import {BusquedaPermisosModule} from "./+permisos/busqueda.permisos.module";
import {BusquedaVacacionesModule} from "./+busqueda-vacacion/busqueda.vacacion.module";
import {BusquedaHorasExtrasModule} from "./+busqueda-horas-extras/busqueda.horas.extras.module";
import {AdministrarVacacionesModule} from "./+administrar-vacacion/administrarVacaciones.module";
import {AdministrarPermisoModule} from "./+administrar-permisos/administrar.permiso.module";
import {AdministrarHorasExtraModule} from "./+administrar-horas-extras/administrarHorasExtras.module";
//CARGO
import {CargoModule} from './+cargo/cargo.module';
import {CargoService} from './+cargo/http-empleados-service';
//Historia Laboral
import {HistoriaLaboralModule} from './+historiaLaboral/historiaLaboral.module';
import {HistoriaLaboralService} from './+historiaLaboral/http-historiaLaboral-service';
import {CargoEditModule} from './+edit-cargo/cargo-edit.module';
//Notification
import { NotificationService } from './+utils/notification.service';
import {HorarioEmpleadoModule} from "./+horario-empleado/horario.empleado.module";
import {AdministrarHorarioEmpleadoModule} from "./+administrar-horario-empleado/administrar.horario.empleado.module";

@NgModule({
  declarations: [
  ],
  imports: [
    personalRouting,
    BusquedaPermisosModule,
    BusquedaVacacionesModule,
    BusquedaEmpleadoModule,
    BusquedaHorasExtrasModule,
    VerEmpleadoModule,
    EmpleadoModule,
    DarBajaModule,
    AdministrarPermisoModule,
    AdministrarVacacionesModule,
    AdministrarHorasExtraModule,
    CargoEditModule,
    HistoriaLaboralModule,
    CargoModule,
    HorarioEmpleadoModule,
    AdministrarHorarioEmpleadoModule
    
  ],
  providers: [
      EmpleadoService,
      CargoService,
      HistoriaLaboralService,
      NotificationService
  ],
})
export class PersonalModule {}