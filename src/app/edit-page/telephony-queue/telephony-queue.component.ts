import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-telephony-queue',
  templateUrl: './telephony-queue.component.html',
  styleUrls: ['./telephony-queue.component.less']
})
export class TelephonyQueueComponent implements OnInit {
  private isVisible: boolean = true;

  queues = ['Очередь для тебя и твоей мамы'];

  constructor() {}

  ngOnInit() {}

  addTelephoneQueue(): void {
    this.queues.push('');
    this.isVisible = false;
  }

  deleteTelephoneQueue() {
    if (this.queues.length > 1) {
      this.queues.pop();
    }
    if (this.queues.length === 1) {
      this.isVisible = true;
    }
  }
}
