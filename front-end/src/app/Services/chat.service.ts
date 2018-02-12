import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { AuthenticationService } from './authentication.service';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ChatService {
  private url = 'http://192.168.1.45:8080';
  private socket;
  private messages = [];
  private oldMessages = [];
  private myMessages = [];
  private friends = [];
  private currUsername;
  public newMess = new EventEmitter<any>();
  public oldMess = new EventEmitter<any>();
  public myMess = new EventEmitter<any>();
  public currUser = new EventEmitter<any>();
  public friendsEmit = new EventEmitter<any>();

  constructor(private authSer: AuthenticationService,
              private http: Http) {
    this.init();
  }

  init() {
    this.authSer.getProfile().subscribe(res => {
      this.currUser.emit(res.user);
      this.currUsername = res.user;
      console.log(res.user.username);
      this.socket = io(this.url, {
        query: {
          username: res.user.username
        }
      });
      this.getOldMessages();
    }, err => {
      console.log(err);
    });
  }

  sendMessage(message) {
    message.fromUser = this.currUsername.username;
    // this.messages[message.toUser].push(message);
    console.log('Message obj Service', message);
    console.log('Message obj Service2', this.messages);
    this.socket.emit('add-message', message);
  }

  addFriend(username) {
    const headers = new Headers();
    const userObj = {
      username: this.currUsername,
      newfriend: username,
      name: 'Fenn'
    };
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://192.168.1.45:8080/addFriend', userObj, {headers: headers});
  }

  getMessages() {
    this.socket.on('message', (data) => {
      console.log('new emitt mess ser init', this.messages);
      console.log('Service recieved text', data);
      const name = data.fromUser;
      data.timeStamp = new Date(data.timeStamp);
      if (this.messages[name]) {
        this.messages[name].push(data);
      } else {
        this.messages[name] = [data];
      }
      console.log('new emitt mess ser', this.messages);
      // this.newMess.emit(this.messages);
      // this.newMess.emit(data);
    });

    this.socket.on('disconnect', () => {
      this.messages = [];
      this.myMessages = [];
      this.oldMessages = [];
      this.oldMess.emit(this.messages);
    });
  }

  getOldMessages() {
    this.socket.on('old-messages', (data) => {
      console.log('old-message service', data);
      // Olds chats from others
      if (data.chat) {
        for (const chat of data.chat.chats ) {
          chat.timeStamp = new Date(chat.timeStamp);
          console.log('each chat', chat);
          const name = chat.fromUser;
          if (this.oldMessages[name]) {
            this.oldMessages[name].push(chat);
          } else {
            this.oldMessages[name] = [chat];
          }
          console.log('for loop1', this.oldMessages);
        }
        // my old chats
        for (const chat of data.chat.myChats ) {
          chat.timeStamp = new Date(chat.timeStamp);
          console.log('each mychat', chat);
          const name = chat.toUser;
          if (this.myMessages[name]) {
            this.myMessages[name].push(chat);
          } else {
            this.myMessages[name] = [chat];
          }
          console.log('for loop', this.myMessages);
        }
        this.friends = data.chat.friends;
        this.sortMessage();
        this.friendsEmit.emit(this.friends);
      }
      console.log('Friends Service', this.friends);
      console.log('Messages Service', this.messages);
      // this.oldMess.emit(this.messages);
      // this.myMess.emit(this.myMessages);
    });
    this.getMessages();
  }

  getFriends() {
    this.friendsEmit.emit(this.friends);
  }

  getMessageEmit() {
    this.oldMess.emit(this.messages);
  }


  sortMessage() {
    // if (this.messages === []) {
      console.log('sortinginside...');
      let i, j;
      for (const user of this.friends) {
        const who = user.username;
        if (this.oldMessages[who] && this.myMessages[who]) {
          console.log('oldmes sort');
          for (i = 0, j = 0 ; i < this.oldMessages[who].length
            && j < this.myMessages[who].length;) {
        if (this.oldMessages[who][i].timeStamp <
            this.myMessages[who][j].timeStamp) {
          if (this.messages[who]) {
            this.messages[who].push(this.oldMessages[who][i]);
          } else {
            this.messages[who] = [this.oldMessages[who][i]];
          }
          i++;
        } else {
          if (this.messages[who]) {
            this.messages[who].push(this.myMessages[who][j]);
          } else {
            this.messages[who] = [this.myMessages[who][j]];
          }
          j++;
        }
      }
      while ( i < this.oldMessages[who].length) {
        this.messages[who].push(this.oldMessages[who][i]);
          i++;
      }
      while ( j < this.myMessages[who].length) {
        this.messages[who].push(this.myMessages[who][j]);
          j++;
      }
    } else if (this.messages[who]) {
      this.messages[who].push(this.oldMessages[who]);
    } else if (this.messages[who]) {
      this.messages[who].push(this.myMessages[who]);
    } else {
      this.messages[who] = [];
      console.log('strange');
    }
  }


    // }
    console.log('sorting...');
    this.oldMess.emit(this.messages);
  }
}
