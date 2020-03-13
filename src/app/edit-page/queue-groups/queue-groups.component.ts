import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-queue-groups',
  templateUrl: './queue-groups.component.html',
  styleUrls: ['./queue-groups.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueueGroupsComponent {
  @Input() controlName: AbstractControl;
  constructor() { }
}
