export class HorarioEmpleadoDia{

     constructor(
         public idHorarioEmpleadoDia?: number,
         public diaSemana?: string,
         public entrada?: string,
         public salida?:string,
         public tiempoAlmuerzo?:number,
         public nombreDiaSemana?:string,
         public laboral?:string
     ) { }


}