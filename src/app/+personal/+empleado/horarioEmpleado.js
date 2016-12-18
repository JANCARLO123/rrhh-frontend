"use strict";
var HorarioEmpleado = (function () {
    function HorarioEmpleado(idHorarioEmpleado, inicioVigencia, finVigencia, tipoHorario, nombreTipoHorario, nombreHorario, horasSemanalHorario, horasSemanal, horariosEmpleadoDia) {
        if (horariosEmpleadoDia === void 0) { horariosEmpleadoDia = []; }
        this.idHorarioEmpleado = idHorarioEmpleado;
        this.inicioVigencia = inicioVigencia;
        this.finVigencia = finVigencia;
        this.tipoHorario = tipoHorario;
        this.nombreTipoHorario = nombreTipoHorario;
        this.nombreHorario = nombreHorario;
        this.horasSemanalHorario = horasSemanalHorario;
        this.horasSemanal = horasSemanal;
        this.horariosEmpleadoDia = horariosEmpleadoDia;
    }
    return HorarioEmpleado;
}());
exports.HorarioEmpleado = HorarioEmpleado;
//# sourceMappingURL=horarioEmpleado.js.map