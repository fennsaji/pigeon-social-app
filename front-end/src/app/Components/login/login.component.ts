import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  Mssg: String;

  constructor(
    private authSer: AuthenticationService,
    private router: Router,
    private chatSer: ChatService
  ) {}

  ngOnInit() {
  }

  onLoginSubmit(f: NgForm) {
    const User = {
      username : f.value.username,
      password : f.value.password
    };
    this.authSer.loginUser(User).subscribe(res => {
      const token  =  res.headers.get('Authorization');
      const userObj = res.json().user;

      this.authSer.storeUserData(token, userObj);
      this.chatSer.init();
      this.router.navigate(['/chat']);

    }, err => {
      this.submitted = true;
      this.Mssg = JSON.parse(err._body).msg;
    });
  }

}
