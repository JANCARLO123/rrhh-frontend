"use strict";
var Cargo = (function () {
    function Cargo(idCargo, idEmpresa, idUnidadDeNegocio, idDepartamentoArea, nombre, descripcion, fechaInicio, fechaFin, salario, idMoneda, idProyecto, horasSemanal) {
        this.idCargo = idCargo;
        this.idEmpresa = idEmpresa;
        this.idUnidadDeNegocio = idUnidadDeNegocio;
        this.idDepartamentoArea = idDepartamentoArea;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.salario = salario;
        this.idMoneda = idMoneda;
        this.idProyecto = idProyecto;
        this.horasSemanal = horasSemanal;
    }
    return Cargo;
}());
exports.Cargo = Cargo;
//# sourceMappingURL=cargo.js.map