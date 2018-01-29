import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn = false;

  constructor(private authSer: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loggedIn =  this.authSer.loggedIn();
  }

  logout() {
    this.authSer.logout().subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
      this.loggedIn = false;
    },
    err => {
      console.log(err);
      this.router.navigate(['/']);
      this.loggedIn = false;
    });
  }

  checkLoggedIn() {
    return this.authSer.loggedIn();
  }
}
