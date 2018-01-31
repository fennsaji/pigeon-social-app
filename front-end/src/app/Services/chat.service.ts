import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ChatService {
  private url = 'http://localhost:8080';
  private socket;
  private messages = [];
  public newMess = new EventEmitter<any>();

  constructor(private authSer: AuthenticationService) {
    this.init();
  }

  init() {
    this.authSer.getProfile().subscribe(res => {
      console.log(res.user.username);
      this.socket = io(this.url, {
        query: {
          username: res.user.username
        }
      });
      this.getMessages();
    }, err => {
      console.log(err);
    });
  }

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    this.socket.on('message', (data) => {
      console.log(data);
      this.messages.push(data);
      this.newMess.emit(this.messages);
    });
  }
}
