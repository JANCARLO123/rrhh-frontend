export class EquipoEntregado{

     constructor(
         public idEquipoEntregado?: number,
         public tipoEquipo?: string,
         public estado?: string,
         public descripcion?: string,
         public nombreTipoEquipo?:string,
         public nombreEstado?:string,
         public fechaEntrega?:string,
         public fechaDevolucion?:string

     ) { }


}