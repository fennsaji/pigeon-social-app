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
  connection;
  message;
  friend;
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
      this.friend = params['userid'];
      this.messageObject.toUser = this.friend;
      this.connection = this.chatSer.oldMess.subscribe(message => {
        console.log('Messages11:', message);
        this.messages = message[this.friend];
        console.log('Messages1old:', this.messages);
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
    this.addToChat(this.messageObject);
    this.chatSer.sendMessage(this.messageObject);
    console.log(this.messageObject);
    this.message = '';
  }

  addToChat(mssg) {
    console.log('added to chat');
    if ( this.messages ) {
      this.messages.push(Object.assign({}, mssg));
    } else {
      this.messages = [this.messageObject];
    }
  }

  ngOnDestroy() {
    this.messages = [];
    this.connection.unsubscribe();
  }

}
