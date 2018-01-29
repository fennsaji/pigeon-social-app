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
export class RegisterComponent implements OnInit, OnChanges {
  @ViewChild('f') signUpForm: NgForm;
  Mssg: String;
  submitted = false;

  constructor(
      private authSer: AuthenticationService,
      private router: Router
    ) {}

  ngOnInit() {
    console.log('Init');
  }

  ngOnChanges() {
    console.log('Changed');
  }

  onRegisterSubmit(f: NgForm) {

    const User =  {
      name: f.value.name,
      username : f.value.username,
      email : f.value.email,
      password : f.value.password,
    };

    console.log(this.signUpForm);
    this.authSer.registerUser(User).subscribe(data => {
        this.submitted = false;
        this.router.navigate(['/login']);

    }, err => {
      if (err) {
        this.signUpForm.value.email.valid = false;
        this.Mssg = JSON.parse(err._body).msg;
        const code = JSON.parse(err._body).code;
        if ( code === 0 ) {

        }
        this.submitted = true;
      }
    });
  }
}
