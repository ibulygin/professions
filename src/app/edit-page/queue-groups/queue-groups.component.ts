import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-queue-groups',
  templateUrl: './queue-groups.component.html',
  styleUrls: ['./queue-groups.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueueGroupsComponent implements OnInit {
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
