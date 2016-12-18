"use strict";
var Educacion = (function () {
    function Educacion(idEducacion, nivelEducacion, institucion, titulo, descripcion, fechaInicio, fechaFin, nombreNivelEducacion) {
        this.idEducacion = idEducacion;
        this.nivelEducacion = nivelEducacion;
        this.institucion = institucion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.nombreNivelEducacion = nombreNivelEducacion;
    }
    return Educacion;
}());
exports.Educacion = Educacion;
//# sourceMappingURL=educacion.js.map