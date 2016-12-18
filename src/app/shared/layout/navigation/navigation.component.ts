import {Component, OnInit, ElementRef, AfterContentInit, AfterViewInit} from "@angular/core";
import {User} from "../../../+auth/_models/usuario";
import {ModuloDto} from "../../../+dtos/moduloDto";

import {ModuloService} from "./http-modulo-service";

declare var $: any;

@Component({
    selector: 'sa-navigation',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent {



    private modulos: Array<ModuloDto> = [];
    public errorMessage: string;

    constructor() {

        this.modulos = JSON.parse(localStorage.getItem("modulos") || '{}');


    }


}
