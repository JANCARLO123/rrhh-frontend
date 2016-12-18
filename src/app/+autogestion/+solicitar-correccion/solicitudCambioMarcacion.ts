import {Marcacion} from "../../+personal/+empleado/marcacion";
export class SolicitudCambioMarcacion {

    constructor(
        public idSolicitudMarcacion?: number,
        public cambiarIngreso?: boolean,
        public cambiarInicioAlmuerzo?: boolean,
        public cambiarFinAlmuerzo?: boolean,
        public cambiarSalida?: boolean,

        public horaIngreso?: string,
        public horaInicioAlmuerzo?: string,
        public horaFinAlmuerzo?: string,
        public horaSalida?: string,

        public razonCambioHoraIngreso?: string,
        public razonCambioHoraInicioAlmuerzo?: string,
        public razonCambioHoraFinAlmuerzo?: string,
        public razonCambioHoraSalida?: string,

        public estado?:string,
        public marcacion:Marcacion=new Marcacion()

    ) { }


}