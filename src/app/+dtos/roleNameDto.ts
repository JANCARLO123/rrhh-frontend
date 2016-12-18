/**
 * Created by javier.cuicapuza on 12/6/2016.
 */

export class RoleNameDto {

    constructor(public idEmpleado?: number,
                public rolName?: string,
                public rolNames?: Array<RoleNameDto>) {
    }


}