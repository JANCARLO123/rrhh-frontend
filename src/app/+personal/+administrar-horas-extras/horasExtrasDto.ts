export class HorasExtrasDto {

    constructor(
		public idHorasExtra?:number,
		public idEmpleado?:number,
		public fecha?: string,
		public horaSalidaHorario?: string,
		public horaSalidaSolicitado?: string, 
		public horas?:string,
		public motivo?: string,
		public estado?: string,
	    public estadoString?: string,
		public nombreEmpleado?: string,
		public jefeInmediato?: string,
		public nombreJefeInmediato?: string,
		public horasCompensadas?: string,
		public comentarioJefeInmediato?: string,
		public horasSemanalesPendientes?: number,
		public idAtendidoPor?: number,
		public unidadDeNegocio?: string,
		public departamentoArea?: string,
		public proyecto?: string
	){}

}