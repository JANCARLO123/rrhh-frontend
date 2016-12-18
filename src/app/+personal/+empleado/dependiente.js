"use strict";
var Dependiente = (function () {
    function Dependiente(idDependiente, nombre, apellidoPaterno, apellidoMaterno, relacion, tipoDocumento, numeroDocumento, fechaNacimiento, nombreRelacion, nombreTipoDocumento) {
        this.idDependiente = idDependiente;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.relacion = relacion;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.fechaNacimiento = fechaNacimiento;
        this.nombreRelacion = nombreRelacion;
        this.nombreTipoDocumento = nombreTipoDocumento;
    }
    return Dependiente;
}());
exports.Dependiente = Dependiente;
//# sourceMappingURL=dependiente.js.map