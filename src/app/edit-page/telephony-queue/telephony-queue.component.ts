import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-telephony-queue',
  templateUrl: './telephony-queue.component.html',
  styleUrls: ['./telephony-queue.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TelephonyQueueComponent implements OnInit {
  isVisible: boolean = true;

  @Input() queues: any[];

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
