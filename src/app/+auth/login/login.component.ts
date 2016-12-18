import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";
import {ModuloService} from "../../shared/layout/navigation/http-modulo-service";
import {ModuloDto} from "../../+dtos/moduloDto";
import {Observable} from "rxjs";
import {RoleNameDto} from "../../+dtos/roleNameDto";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    modulos: Array<ModuloDto>;
    rolNames: Array<RoleNameDto>;
    errorMessage: string;

    constructor(private router: Router,
                private authenticationService: AuthenticationService, private moduloService: ModuloService) {
    }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        Observable.forkJoin(
             this.moduloService.getModulosPermitidos(this.model.username),
             this.moduloService.getRolNameUser(this.model.username),
             this.authenticationService.login(this.model.username, this.model.password)
         ).subscribe(
         data => {
             debugger;
             this.modulos = data[0];
             localStorage.setItem("modulos", JSON.stringify(this.modulos));

             this.rolNames = data[1];
             localStorage.setItem("rolName", JSON.stringify(this.rolNames));

             this.router.navigate(['/dashboard/analytics']);
         },
         error => {
             this.error = 'Username or password is incorrect';
             this.loading = false;
         });

    }
}