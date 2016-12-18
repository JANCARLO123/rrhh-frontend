import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Departamento} from './departamento';
import {UndNegocio} from './undnegocio';
import {Proyecto} from './proyecto';

@Injectable() 
export class DepartamentoService {

  private departamentosUrl = 'http://localhost:7999/departamento/';
  private undNegocioUrl = 'http://localhost:7999/undNegocio/';
  private proyectoUrl = 'http://localhost:7999/proyecto/';
     
  constructor(private http: Http) { }

  //getDepartamentos(): Promise<Departamento[]> {
   /*getDepartamentos(): Observable<Departamento[]> { 
        /*const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.departamentosUrl)
              .map(this.extractData)
              .catch(this.handleError);
               /*.toPromise()
               .then(response => response.json().data as Departamento[])
               .catch(this.handleError);
  }*/
  completarComboDepa(metodo:string) {
    return this.http.get(this.departamentosUrl+metodo)
          .map(res => <Departamento[]> res.json())
          .catch(this.handleError);
  }
  completarComboUndNegocio(metodo:string){
    return this.http.get(this.undNegocioUrl+metodo)
          .map(res => <UndNegocio[]> res.json())
          .catch(this.handleError);
  }
  completarComboProyecto(metodo:string){
    return this.http.get(this.proyectoUrl+metodo)
          .map(res => <Proyecto[]> res.json())
          .catch(this.handleError);
  }
  /*getDepartamento(idDepartamento: number): Promise<Departamento> {
    return this.getDepartamentos()
               .then(departamentos => departamentos.find(departamento => departamento.idDepartamento === idDepartamento));
  }*/
  private handleError(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }

}