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
    console.log('Message obj Service', message);
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
      this.newMess.emit(data);
    });

    this.socket.on('disconnect', () => {
      this.messages = [];
      this.myMessages = [];
      this.oldMess.emit(this.messages);
      this.myMess.emit(this.myMessages);
    });
  }

  getOldMessages() {
    this.socket.on('old-messages', (data) => {
      console.log('old-message service', data);
      // Olds chats from others
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
      this.friendsEmit.emit(this.friends);
      console.log('Friends Service', this.friends);
      console.log('Messages Service', this.messages);
      this.sortMessage();
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
        if (this.oldMessages[user.username] && this.myMessages[user.username]) {
          console.log('oldmes sort');
          for (i = 0, j = 0 ; i < this.oldMessages[user.username].length
            && j < this.myMessages[user.username].length;) {
        if (this.oldMessages[user.username][i].timeStamp <
            this.myMessages[user.username][j].timeStamp) {
          if (this.messages[user.username]) {
            this.messages[user.username].push(this.oldMessages[user.username][i]);
          } else {
            this.messages[user.username] = [this.oldMessages[user.username][i]];
          }
          i++;
        } else {
          if (this.messages[user.username]) {
            this.messages[user.username].push(this.myMessages[user.username][j]);
          } else {
            this.messages[user.username] = [this.myMessages[user.username][j]];
          }
          j++;
        }
      }
      while ( i < this.oldMessages[user.username].length) {
        this.messages[user.username].push(this.oldMessages[user.username][i]);
          i++;
      }
      while ( j < this.myMessages[user.username].length) {
        this.messages[user.username].push(this.myMessages[user.username][j]);
          j++;
      }
    } else if (this.oldMessages[user.username]) {
      this.messages[user.username].push(this.oldMessages[user.username]);
    } else if (this.myMessages[user.username]) {
      this.messages[user.username].push(this.myMessages[user.username]);
    } else {
      console.log('strange');
    }
  }


    // }
    console.log('sorting...');
    this.oldMess.emit(this.messages);
  }
}
