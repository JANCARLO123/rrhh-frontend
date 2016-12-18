"use strict";
var HistoriaLaboralDto = (function () {
    /*idHistorialLaboral: number;
    unidadNegocio: string;
    departamentoArea: string;
    proyecto: string;
    cargo: string;
    jefeInmediato: string;
    desdeFecha: string;
    hastaFecha: string;*/
    function HistoriaLaboralDto(idHistorialLaboral, unidadNegocio, departamentoArea, idUnidaDeNegocio, idDepartamentoArea, proyecto, cargo, jefeInmediato, desdeFecha, hastaFecha, salario, idProyecto, idCargo, descripcion, idMoneda, horasSemanal, horasSemanalHorario, tipoHorario, idHorario, diaSemana, laboral, entrada, salida, tiempoAlmuerzo, idEmpleado) {
        this.idHistorialLaboral = idHistorialLaboral;
        this.unidadNegocio = unidadNegocio;
        this.departamentoArea = departamentoArea;
        this.idUnidaDeNegocio = idUnidaDeNegocio;
        this.idDepartamentoArea = idDepartamentoArea;
        this.proyecto = proyecto;
        this.cargo = cargo;
        this.jefeInmediato = jefeInmediato;
        this.desdeFecha = desdeFecha;
        this.hastaFecha = hastaFecha;
        this.salario = salario;
        this.idProyecto = idProyecto;
        this.idCargo = idCargo;
        this.descripcion = descripcion;
        this.idMoneda = idMoneda;
        this.horasSemanal = horasSemanal;
        this.horasSemanalHorario = horasSemanalHorario;
        this.tipoHorario = tipoHorario;
        this.idHorario = idHorario;
        this.diaSemana = diaSemana;
        this.laboral = laboral;
        this.entrada = entrada;
        this.salida = salida;
        this.tiempoAlmuerzo = tiempoAlmuerzo;
        this.idEmpleado = idEmpleado;
        /*this.idHistorialLaboral = idHistorialLaboral;
        this.unidadNegocio = unidadNegocio;
        this.departamentoArea = departamentoArea;
        this.proyecto = proyecto;
        this.cargo = cargo;
        this.jefeInmediato = jefeInmediato;
        this.desdeFecha = desdeFecha;
        this.hastaFecha = hastaFecha;*/
    }
    return HistoriaLaboralDto;
}());
exports.HistoriaLaboralDto = HistoriaLaboralDto;
//# sourceMappingURL=historiaLaboralDto.js.map