import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages</h2>
      <button claas="clear"
      (click)="messageService.clear()"
      >Clear Message</button>
      <div *ngFor="let message of messageService.messages">{{message}}</div>
    </div>
  `,
  styles: [
  ]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
