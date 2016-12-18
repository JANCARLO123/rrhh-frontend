export class PeriodoEmpleado{

     constructor(
         public idPeriodoEmpleado?: number,
         public idEmpleado?:number,
         public periodo?: string,
         public permisosUsados?: string,
         public permisosPermitidos?:string,
         public fechaInicio?:string,
         public fechaFin?:string

     ) { }


}