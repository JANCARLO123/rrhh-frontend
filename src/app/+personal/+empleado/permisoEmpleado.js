"use strict";
var periodoEmpleado_1 = require("./periodoEmpleado");
var PermisoEmpleado = (function () {
    function PermisoEmpleado(idPermisoEmpleado, motivo, nombreMotivo, razon, fecha, fechaRecuperacion, horaInicio, horaFin, horaInicioRecuperacion, horaFinRecuperacion, estado, jefeInmediato, nombreEstado, horas, periodoEmpleado) {
        if (periodoEmpleado === void 0) { periodoEmpleado = new periodoEmpleado_1.PeriodoEmpleado(); }
        this.idPermisoEmpleado = idPermisoEmpleado;
        this.motivo = motivo;
        this.nombreMotivo = nombreMotivo;
        this.razon = razon;
        this.fecha = fecha;
        this.fechaRecuperacion = fechaRecuperacion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.horaInicioRecuperacion = horaInicioRecuperacion;
        this.horaFinRecuperacion = horaFinRecuperacion;
        this.estado = estado;
        this.jefeInmediato = jefeInmediato;
        this.nombreEstado = nombreEstado;
        this.horas = horas;
        this.periodoEmpleado = periodoEmpleado;
    }
    return PermisoEmpleado;
}());
exports.PermisoEmpleado = PermisoEmpleado;
//# sourceMappingURL=permisoEmpleado.js.map