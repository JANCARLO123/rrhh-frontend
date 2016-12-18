export class Dependiente{

     constructor(
         public idDependiente?: number,
         public nombre?: string,
         public apellidoPaterno?: string,
         public apellidoMaterno?:string,
         public relacion?:string,
         public tipoDocumento?:string,
         public numeroDocumento?:string,
         public fechaNacimiento?:string,
         public nombreRelacion?:string,
         public nombreTipoDocumento?:string
     ) { }


}