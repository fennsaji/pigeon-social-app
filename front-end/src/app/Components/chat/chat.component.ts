import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users = ['thefenn', 'fennsaji'];

  constructor() {}

  ngOnInit() {}


}
