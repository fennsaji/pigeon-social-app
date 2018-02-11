import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ChatService } from '../../../Services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit, OnDestroy {
  messages = [];
  connection1;
  connection2;
  connection3;
  message;
  messageObject = {
    toUser: String,
    fromUser: String,
    timeStamp: new Date(),
    message: String
  };

  constructor(private chatSer: ChatService,
              private route_name: ActivatedRoute) { }

  ngOnInit() {
    this.route_name.params.subscribe((params: Params) => {
      this.messageObject.toUser = params['userid'];
      this.connection1 = this.chatSer.oldMess.subscribe(message => {
        console.log('Messages11:', message);
        this.messages = message[params['userid']];
        console.log('Messages1old:', this.messages);
      });

      this.connection2 = this.chatSer.newMess.subscribe(message => {
        console.log('Messages22:', message);
        if (message.fromUser === params['userid']) {
          this.messages.push(message);
        }
        console.log('Messages2new:', this.messages);
      });

      this.chatSer.getMessageEmit();
    });

    this.chatSer.currUser.subscribe(currUser => {
      this.messageObject.fromUser = currUser.username;
      console.log('Current User', currUser);
    });
  }

  sendMessage() {
    console.log(this.message);
    this.messageObject.timeStamp = new Date();
    this.messageObject.message = this.message;
    this.addToChat();
    this.chatSer.sendMessage(this.messageObject);
    console.log(this.messageObject);
    this.message = '';
    this.messageObject.timeStamp = null;
    this.messageObject.message = null;
  }

  addToChat() {
    if ( this.messages ) {
      this.messages.push(Object.assign({}, this.messageObject));
    } else {
      this.messages = [this.messageObject];
    }
  }

  ngOnDestroy() {
    this.messages = [];
    this.connection1.unsubscribe();
    this.connection2.unsubscribe();
    this.connection3.unsubscribe();
  }

}
