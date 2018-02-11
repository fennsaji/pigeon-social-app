import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  friends = [];

  constructor(private chatSer: ChatService) {
  }

  ngOnInit() {
    // this.chatSer.init();
    this.chatSer.friendsEmit.subscribe(friends => {
      this.friends = friends;
    });
    this.chatSer.getFriends();
  }
}
