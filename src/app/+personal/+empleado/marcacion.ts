import {Empleado} from "./empleado";
import {SolicitudCambioMarcacion} from "../../+autogestion/+solicitar-correccion/solicitudCambioMarcacion";
export class Marcacion{

     constructor(
         public idMarcacion?:number,
         public idEmpleado?:number,
         public fecha?:string,
         public horaIngreso?:string,
         public horaInicioAlmuerzo?:string,
         public horaFinAlmuerzo?:string,
         public horaSalida?:string,
         public horaIngresoHorario?:string,
         public horaSalidaHorario?:string,
         public inasistencia?:string,
         public nombreCompletoEmpleado?:string,
         public tardanza?:string,
         public solicitudCambio?:string,

         public nombreProyecto?:string,
         public nombreDepartamento?:string,
         public nombreUnidadNegocio?:string,

         public horasTrabajoHorario?:number,
         public demoraEntrada?:number,
         public demoraAlmuerzo?:number,
         public demoraSalida?:number,
         public horasTrabajoReal?:number,
         public horasPermiso?:number,
         public horasExtra?:number,
         public horasTrabajoPendiente?:number,

         public empleado:Empleado = new Empleado(),
         public solicitudesCambioMarcacion:SolicitudCambioMarcacion[]=[]

     ) { }


}