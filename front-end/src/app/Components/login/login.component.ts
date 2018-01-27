import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Mssg: String;
  constructor(
    private authSer: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onLoginSubmit(f: NgForm) {
    const User = {
      username : f.value.username,
      password : f.value.password
    };
    console.log(User);
    this.authSer.loginUser(User).subscribe(res => {
      this.authSer.storeUserData(res.headers.get('Authorization'), res.json().user);
      this.router.navigate(['/chat']);
      console.log(res, res.headers.get('Authorization'));
    }, err => {
      this.Mssg = 'Invalid Details';
      console.log(err);
    });
  }

}
