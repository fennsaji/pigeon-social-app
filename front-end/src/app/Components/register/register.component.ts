import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authSer: AuthenticationService) { }

  ngOnInit() {
  }

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
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
