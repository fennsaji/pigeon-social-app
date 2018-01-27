import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private authSer: AuthenticationService,
      private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authSer.loggedIn()) {
        console.log('loggedIn');
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
 }
