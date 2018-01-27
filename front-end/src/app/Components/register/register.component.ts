import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Mssg: String;

  constructor(
      private authSer: AuthenticationService,
      private router: Router
    ) { }

  ngOnInit() {}

  onRegisterSubmit(f: NgForm) {
    console.log(f);
    const User =  {
      name: f.value.name,
      username : f.value.username,
      email : f.value.email,
      password : f.value.password,
    };
    console.log(User);
    this.authSer.registerUser(User).subscribe(data => {
      if (data) {
        this.Mssg = data.msg;
      }
      this.router.navigate(['/login']);
      console.log(data);
    }, err => {
      if (err) {
        this.Mssg = err.msg;
      }
      console.log(err);
    });
  }
}
