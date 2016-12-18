import {HorarioEmpleado} from "../+empleado/horarioEmpleado";
export class HistoriaLaboralDto {
    /*idHistorialLaboral: number;
    unidadNegocio: string;
    departamentoArea: string;
    proyecto: string;
    cargo: string;
    jefeInmediato: string;
    desdeFecha: string;
    hastaFecha: string;*/

    constructor(public idHistorialLaboral?: number,
        public unidadNegocio?: string,
        public departamentoArea?: string,
        public idUnidaDeNegocio?: number,
        public idDepartamentoArea?: number,
        public proyecto?: string,
        public cargo?: string,
        public jefeInmediato?: string,
        public desdeFecha?: string,
        public hastaFecha?: string,
        public salario?: number,
        public idProyecto?: number,
        public idCargo?: number,
        public descripcion?: string,
        public idMoneda?: number,
        public horasSemanal?: number,
        public horasSemanalHorario?: number,
        public tipoHorario?: string,
        public idHorario?: number,
        public diaSemana?: string,
        public laboral?: any,
        public entrada?: string,
        public salida?: string,
        public tiempoAlmuerzo?: string,
        public idEmpleado?: number,
        public horarioEmpleado:HorarioEmpleado=new HorarioEmpleado()

    ) {
        /*this.idHistorialLaboral = idHistorialLaboral;
        this.unidadNegocio = unidadNegocio;
        this.departamentoArea = departamentoArea;
        this.proyecto = proyecto;
        this.cargo = cargo;
        this.jefeInmediato = jefeInmediato;
        this.desdeFecha = desdeFecha;
        this.hastaFecha = hastaFecha;*/
    }
}