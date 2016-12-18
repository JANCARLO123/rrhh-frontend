"use strict";
var DocumentoEmpleado = (function () {
    function DocumentoEmpleado(idDocumentoEmpleado, nombre, contenidoArchivo, tipoArchivo, nombreArchivo, fotoEmpleado) {
        if (fotoEmpleado === void 0) { fotoEmpleado = 0; }
        this.idDocumentoEmpleado = idDocumentoEmpleado;
        this.nombre = nombre;
        this.contenidoArchivo = contenidoArchivo;
        this.tipoArchivo = tipoArchivo;
        this.nombreArchivo = nombreArchivo;
        this.fotoEmpleado = fotoEmpleado;
    }
    return DocumentoEmpleado;
}());
exports.DocumentoEmpleado = DocumentoEmpleado;
//# sourceMappingURL=documentoEmpleado.js.map