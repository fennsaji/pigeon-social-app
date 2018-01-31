import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  messageObject = {
    toUser: 'dishu143',
    fromUser: 'thefenn',
    timeStamp: new Date(),
    message: String
  };

  constructor(private chatSer: ChatService) { }

  sendMessage(event: any) {
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
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
