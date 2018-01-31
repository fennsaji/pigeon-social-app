import { Component } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';
import { OnInit } from '@angular/core';
import { ChatService } from './Services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authSer: AuthenticationService, private chatSer: ChatService) {}

  ngOnInit() {
    this.authSer.loadToken();
    // this.chatSer.init();
  }
}
