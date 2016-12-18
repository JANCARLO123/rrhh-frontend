/**
 * Created by josediaz on 25/11/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import "rxjs/add/operator/toPromise";
import {environment} from "../../../../environments/environment";
import {ModuloDto} from "../../../+dtos/moduloDto";
import {RoleNameDto} from "../../../+dtos/roleNameDto";


@Injectable()
export class ModuloService {

    localhost: String = environment.backend;
    port: String = environment.port;


    private modulosPermitidosUrl = 'http://' + this.localhost + ':' + this.port + '/modulo/modulosPermitidos?cuentaUsuario=';
    private rolNameUrl = 'http://' + this.localhost + ':' + this.port + '/modulo/rolNamesUser?cuentaUsuario=';


    constructor(private http: Http) {
    }


    private handleError(error: Response) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getModulosPermitidos(cuentaUsuario: string) {
        return this.http.get(this.modulosPermitidosUrl + cuentaUsuario)
            .map(res => <ModuloDto[]> res.json())
            .catch(this.handleError);
    }

    getRolNameUser(cuentaUsuario: string) {
        return this.http.get(this.rolNameUrl + cuentaUsuario)
            .map(res => <RoleNameDto[]> res.json())
            .catch(this.handleError);
    }

}