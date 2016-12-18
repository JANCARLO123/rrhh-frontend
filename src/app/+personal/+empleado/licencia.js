"use strict";
var Licencia = (function () {
    function Licencia(idLicencia, motivo, comentario, fechaInicio, fechaFin, dias, nombreMotivo) {
        this.idLicencia = idLicencia;
        this.motivo = motivo;
        this.comentario = comentario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.dias = dias;
        this.nombreMotivo = nombreMotivo;
    }
    return Licencia;
}());
exports.Licencia = Licencia;
//# sourceMappingURL=licencia.js.map