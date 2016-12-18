"use strict";
/**
 * Created by josediaz on 8/11/2016.
 */
var periodoEmpleado_1 = require("../+empleado/periodoEmpleado");
var Permisos = (function () {
    function Permisos(idPermisoEmpleado, idPeriodoEmpleado, idAtentidoPor, codigo, motivo, razon, fecha, horaInicio, horaFin, horas, fechaRecuperacion, horarioInicioRecuperacion, horarioFinRecuperacion, horaInicioRecuperacion, horaFinRecuperacion, periodoEmpleado, estado, estadoString) {
        if (periodoEmpleado === void 0) { periodoEmpleado = new periodoEmpleado_1.PeriodoEmpleado(); }
        this.idPermisoEmpleado = idPermisoEmpleado;
        this.idPeriodoEmpleado = idPeriodoEmpleado;
        this.idAtentidoPor = idAtentidoPor;
        this.codigo = codigo;
        this.motivo = motivo;
        this.razon = razon;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.horas = horas;
        this.fechaRecuperacion = fechaRecuperacion;
        this.horarioInicioRecuperacion = horarioInicioRecuperacion;
        this.horarioFinRecuperacion = horarioFinRecuperacion;
        this.horaInicioRecuperacion = horaInicioRecuperacion;
        this.horaFinRecuperacion = horaFinRecuperacion;
        this.periodoEmpleado = periodoEmpleado;
        this.estado = estado;
        this.estadoString = estadoString;
    }
    return Permisos;
}());
exports.Permisos = Permisos;
//# sourceMappingURL=Permisos.js.map