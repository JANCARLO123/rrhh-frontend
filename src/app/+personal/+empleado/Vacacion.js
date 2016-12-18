"use strict";
var Vacacion = (function () {
    function Vacacion(idVacacion, diasCalendarios, diasHabiles, estado, nombreEstado, codigo, jefeInmediato, fechaInicio, fechaFin) {
        this.idVacacion = idVacacion;
        this.diasCalendarios = diasCalendarios;
        this.diasHabiles = diasHabiles;
        this.estado = estado;
        this.nombreEstado = nombreEstado;
        this.codigo = codigo;
        this.jefeInmediato = jefeInmediato;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    return Vacacion;
}());
exports.Vacacion = Vacacion;
//# sourceMappingURL=Vacacion.js.map