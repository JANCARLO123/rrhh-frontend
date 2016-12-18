import {RoleNameDto} from "../+dtos/roleNameDto";
/**
 * Created by javier.cuicapuza on 12/6/2016.
 */

export class LocalStorageGlobal{

    constructor(
        public idEmpleado?: number,
        public rolName?: String,
        public mostrarBoton?: boolean,
        public mostrarBotonEmple?: boolean,
        public mostrarBotonRhna?: boolean,
        public mostrarBotonGeren?: boolean,
        public mostrarBotonAdmin?: boolean,
        public typeWrite?: boolean,
        public typeRead?: boolean
    ){ }
    /*private rolNames: Array<RoleNameDto> = [];

    function(){
        this.rolNames = JSON.parse(localStorage.getItem("rolName") || '{}');

        for(let rolVal of this.rolNames[0].rolNames){


            console.log('>>>>>>>2: '+rolVal.rolName)
        }
        return this.rolNames[0];
    }*/

}