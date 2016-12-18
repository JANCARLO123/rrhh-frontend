import {PeriodoEmpleado} from "./periodoEmpleado";
export class Vacacion{

     constructor(
         public idVacacion?:number,
         public idPeriodoEmpleado?:number,
         public idEmpleado?:number,
         public diasCalendarios?:number,
         public diasHabiles?:number,
         public periodo?:string,
         public estado?:string,
         public nombreEstado?:string,
         public codigo?:string,
         public jefeInmediato?:string,
         public fechaInicio?:string,
         public fechaFin?:string,
         public periodoEmpleado:PeriodoEmpleado = new PeriodoEmpleado()

     ) { }


}