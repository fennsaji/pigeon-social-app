import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../Services/chat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  constructor(private chatSer: ChatService) { }

  ngOnInit() {
  }

  searchPeople(f: NgForm) {
    console.log(f.value.username);
    this.chatSer.addFriend(f.value.username).subscribe(res => {
      console.log('Added as friend');
    }, err => {
      console.log('Couldnot add friend');
    });
  }
}
