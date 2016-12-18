"use strict";
var EquipoEntregado = (function () {
    function EquipoEntregado(idEquipoEntregado, tipoEquipo, estado, descripcion, nombreTipoEquipo, nombreEstado, fechaEntrega, fechaDevolucion) {
        this.idEquipoEntregado = idEquipoEntregado;
        this.tipoEquipo = tipoEquipo;
        this.estado = estado;
        this.descripcion = descripcion;
        this.nombreTipoEquipo = nombreTipoEquipo;
        this.nombreEstado = nombreEstado;
        this.fechaEntrega = fechaEntrega;
        this.fechaDevolucion = fechaDevolucion;
    }
    return EquipoEntregado;
}());
exports.EquipoEntregado = EquipoEntregado;
//# sourceMappingURL=equipoEntregado.js.map