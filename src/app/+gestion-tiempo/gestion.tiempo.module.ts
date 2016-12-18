import {NgModule} from "@angular/core";
import {gestionTiempoRouting} from "./gestion.tiempo.routing";
import {BusquedaMarcacionModule} from "./+busqueda-marcacion/busqueda.marcacion.module";
import {EmpleadoService} from "../+personal/+empleado/empleado.service";
import {BusquedaHorarioModule} from "./+busqueda-horario/busqueda.horario.module";
import {AdministrarHorarioModule} from "./+administrar-horario/administrar.horario.module";

@NgModule({
  declarations: [
  ],
  imports: [
    gestionTiempoRouting,
      BusquedaMarcacionModule,
      BusquedaHorarioModule,
      AdministrarHorarioModule


  ],
  providers: [
      EmpleadoService
  ],
})
export class GestionTiempoModule {}