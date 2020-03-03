import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-queue-groups',
  templateUrl: './queue-groups.component.html',
  styleUrls: ['./queue-groups.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueueGroupsComponent {
  @Input() value: any;
  constructor() { }
}
