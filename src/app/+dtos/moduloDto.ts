/**
 * Created by josediaz on 25/11/2016.
 */

export class ModuloDto {

    constructor(public nombre?: string,
                url?: string,
                codigo?: string,
                tipoPermiso?: string,
                visible?: string,
                subModulos?: Array<ModuloDto>) {

    }


}
