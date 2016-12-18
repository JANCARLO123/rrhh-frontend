export class Cargo {
  constructor(public idCargo?: number,
    public idEmpresa?: number,
    public idUnidadDeNegocio?: number,
    public idDepartamentoArea?: number,
    public nombre?: string,
    public descripcion?: string,
    public fechaInicio?: string,
    public fechaFin?: string,
    public salario?: number,
    public idMoneda?: number,
    public idProyecto?: number,
    public horasSemanal?: number) { }
}