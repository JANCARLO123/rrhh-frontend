export class AgendarVacacion {

    constructor(
        public idVacacion?: number,
        public idPeriodoEmpleado?: number,
        public codigo?: number,
        public idEmpleado?: number,
        public idAtendidoPor?: number,
        public fechaInicio?: string,
        public fechaFin?: string,
        public diasCalendarios?: number,
        public diasHabiles?: number,
        public estado?:string,
        public estadoString?:string,
        public nombreJefeInmediato?:string,
        public diasVacacionesDisponibles?:string,

    ) { }


}