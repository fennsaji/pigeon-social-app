import { Component } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authSer: AuthenticationService) {}

  ngOnInit() {
    this.authSer.loadToken();
  }
}
