/**
 * Created by josediaz on 22/11/2016.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);

        return false;
    }
}