"use strict";
var Empleado = (function () {
    function Empleado(idEmpleado, idEmpresa, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, tipoDocumentoString, numeroDocumento, genero, generoString, estadoCivil, estadoCivilString, grupoSangre, grupoSangreString, paisNacimiento, paisNacimientoString, departamentoNacimiento, departamentoNacimientoString, provinciaNacimiento, provinciaNacimientoString, distritoNacimiento, codigo, emailInterno, telefonoInterno, anexoInterno, idCentroCosto, centroCostoString, contratoTrabajo, contratoTrabajoString, regimenHorario, regimenHorarioString, regimenLaboral, regimenLaboralString, tipoTrabajador, tipoTrabajadorString, telefonoCasa, telefonoCelular, telefonoAdicional, emailPersonal, tipoDomicilio, tipoDomicilioString, direccionDomicilio, paisDomicilio, paisDomicilioString, departamentoDomicilio, departamentoDomicilioString, provinciaDomicilio, provinciaDomicilioString, distritoDomicilio, nombreContactoEmergencia, emailContactoEmergencia, telefonoContactoEmergencia, relacionContactoEmergencia, relacionContactoEmergenciaString, motivoRenuncia, estado, estadoString, fechaNacimiento, fecNac, fechaIngreso, edad, esPersonalDeConfianza, discapacitado, nombreProyecto, nombreDepartamento, nombreUnidadNegocio, documentos, educaciones, experienciasLaborales, equiposEntregados, dependientes, licencias) {
        if (esPersonalDeConfianza === void 0) { esPersonalDeConfianza = false; }
        if (discapacitado === void 0) { discapacitado = false; }
        if (documentos === void 0) { documentos = []; }
        if (educaciones === void 0) { educaciones = []; }
        if (experienciasLaborales === void 0) { experienciasLaborales = []; }
        if (equiposEntregados === void 0) { equiposEntregados = []; }
        if (dependientes === void 0) { dependientes = []; }
        if (licencias === void 0) { licencias = []; }
        this.idEmpleado = idEmpleado;
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.tipoDocumento = tipoDocumento;
        this.tipoDocumentoString = tipoDocumentoString;
        this.numeroDocumento = numeroDocumento;
        this.genero = genero;
        this.generoString = generoString;
        this.estadoCivil = estadoCivil;
        this.estadoCivilString = estadoCivilString;
        this.grupoSangre = grupoSangre;
        this.grupoSangreString = grupoSangreString;
        this.paisNacimiento = paisNacimiento;
        this.paisNacimientoString = paisNacimientoString;
        this.departamentoNacimiento = departamentoNacimiento;
        this.departamentoNacimientoString = departamentoNacimientoString;
        this.provinciaNacimiento = provinciaNacimiento;
        this.provinciaNacimientoString = provinciaNacimientoString;
        this.distritoNacimiento = distritoNacimiento;
        this.codigo = codigo;
        this.emailInterno = emailInterno;
        this.telefonoInterno = telefonoInterno;
        this.anexoInterno = anexoInterno;
        this.idCentroCosto = idCentroCosto;
        this.centroCostoString = centroCostoString;
        this.contratoTrabajo = contratoTrabajo;
        this.contratoTrabajoString = contratoTrabajoString;
        this.regimenHorario = regimenHorario;
        this.regimenHorarioString = regimenHorarioString;
        this.regimenLaboral = regimenLaboral;
        this.regimenLaboralString = regimenLaboralString;
        this.tipoTrabajador = tipoTrabajador;
        this.tipoTrabajadorString = tipoTrabajadorString;
        this.telefonoCasa = telefonoCasa;
        this.telefonoCelular = telefonoCelular;
        this.telefonoAdicional = telefonoAdicional;
        this.emailPersonal = emailPersonal;
        this.tipoDomicilio = tipoDomicilio;
        this.tipoDomicilioString = tipoDomicilioString;
        this.direccionDomicilio = direccionDomicilio;
        this.paisDomicilio = paisDomicilio;
        this.paisDomicilioString = paisDomicilioString;
        this.departamentoDomicilio = departamentoDomicilio;
        this.departamentoDomicilioString = departamentoDomicilioString;
        this.provinciaDomicilio = provinciaDomicilio;
        this.provinciaDomicilioString = provinciaDomicilioString;
        this.distritoDomicilio = distritoDomicilio;
        this.nombreContactoEmergencia = nombreContactoEmergencia;
        this.emailContactoEmergencia = emailContactoEmergencia;
        this.telefonoContactoEmergencia = telefonoContactoEmergencia;
        this.relacionContactoEmergencia = relacionContactoEmergencia;
        this.relacionContactoEmergenciaString = relacionContactoEmergenciaString;
        this.motivoRenuncia = motivoRenuncia;
        this.estado = estado;
        this.estadoString = estadoString;
        this.fechaNacimiento = fechaNacimiento;
        this.fecNac = fecNac;
        this.fechaIngreso = fechaIngreso;
        this.edad = edad;
        this.esPersonalDeConfianza = esPersonalDeConfianza;
        this.discapacitado = discapacitado;
        this.nombreProyecto = nombreProyecto;
        this.nombreDepartamento = nombreDepartamento;
        this.nombreUnidadNegocio = nombreUnidadNegocio;
        this.documentos = documentos;
        this.educaciones = educaciones;
        this.experienciasLaborales = experienciasLaborales;
        this.equiposEntregados = equiposEntregados;
        this.dependientes = dependientes;
        this.licencias = licencias;
    }
    return Empleado;
}());
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map