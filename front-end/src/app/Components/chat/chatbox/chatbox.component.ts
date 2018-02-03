import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ChatService } from '../../../Services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  messageObject = {
    toUser: String,
    fromUser: String,
    timeStamp: new Date(),
    message: String
  };

  constructor(private chatSer: ChatService,
              private route_name: ActivatedRoute) { }

  sendMessage() {
    console.log(this.message);
    this.messageObject.message = this.message;
    // console.log(this.messages);
    this.chatSer.sendMessage(this.messageObject);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatSer.newMess.subscribe(message => {
      this.messages = message;
      console.log(this.message);
    });
    this.route_name.params.subscribe((params: Params) => {
      this.messageObject.toUser = params['userid'];
    });
    // this.chatSer.currUser().then();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


}
