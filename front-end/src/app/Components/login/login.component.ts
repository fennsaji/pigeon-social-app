import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSer: AuthenticationService
  ) {}

  ngOnInit() {
  }

  onLoginSubmit(f: NgForm) {
    const User = {
      username : f.value.email,
      password : f.value.password
    };
    this.authSer.loginUser(User).subscribe(data => {
      console.log(data);
      this.authSer.storeUserData(undefined, data);
    }, err => {
      console.log(err);
    });
  }

}
