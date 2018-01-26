import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class AuthGuard {

    constructor(
      private authSer: AuthenticationService,
      private router: Router) { }

    canActivate() {
      if (this.authSer.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
 }
