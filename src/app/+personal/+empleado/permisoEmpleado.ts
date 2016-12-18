import {PeriodoEmpleado} from "./periodoEmpleado";
export class PermisoEmpleado{

     constructor(
         public idPermisoEmpleado?:number,
         public idPeriodoEmpleado?:number,
         public periodo?:string,
         public motivo?:string,
         public nombreMotivo?:string,
         public razon?:string,
         public fecha?:string,
         public fechaRecuperacion?:string,
         public horaInicio?:string,
         public horaFin?:string,
         public horaInicioRecuperacion?:string,
         public horaFinRecuperacion?:string,
         public estado?:string,
         public jefeInmediato?:string,
         public nombreEstado?:string,
         public horas?:number,
         public periodoEmpleado:PeriodoEmpleado = new PeriodoEmpleado()

     ) { }

}