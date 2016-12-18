import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {environment} from "../../../environments/environment";
import {ModuloService} from "../../shared/layout/navigation/http-modulo-service";
import {ModuloDto} from "../../+dtos/moduloDto";
import {RoleNameDto} from "../../+dtos/roleNameDto";

@Injectable()
export class AuthenticationService {


    localhost:  String = environment.backend;
    port: String = environment.port;

    public token: string;

    private authenticateUrl = 'http://'+this.localhost+':'+this.port+'/api/auth/login';

    constructor(private http: Http, private moduloService: ModuloService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authenticateUrl, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response

                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('modulos');
        localStorage.removeItem('rolName');
        localStorage.clear();
    }
}