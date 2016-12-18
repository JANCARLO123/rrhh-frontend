"use strict";
var PeriodoEmpleado = (function () {
    function PeriodoEmpleado(idPeriodoEmpleado, idEmpleado, periodo, permisosUsados, permisosPermitidos, fechaInicio, fechaFin) {
        this.idPeriodoEmpleado = idPeriodoEmpleado;
        this.idEmpleado = idEmpleado;
        this.periodo = periodo;
        this.permisosUsados = permisosUsados;
        this.permisosPermitidos = permisosPermitidos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    return PeriodoEmpleado;
}());
exports.PeriodoEmpleado = PeriodoEmpleado;
//# sourceMappingURL=periodoEmpleado.js.map