import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephony-queue',
  templateUrl: './telephony-queue.component.html',
  styleUrls: ['./telephony-queue.component.less']
})
export class TelephonyQueueComponent implements OnInit {
  queues = ['Очередь для тебя и твлей мамы'];

  constructor() { }

  ngOnInit() {
  }
  
  addTelephoneQueue(): void {
    this.queues.push('');
  }

  deleteTelephoneQueue(){
    if(this.queues.length > 1) {
      this.queues.pop();
    }  
  }
}
