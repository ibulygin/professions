import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-groups',
  templateUrl: './queue-groups.component.html',
  styleUrls: ['./queue-groups.component.less']
})
export class QueueGroupsComponent implements OnInit {
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
