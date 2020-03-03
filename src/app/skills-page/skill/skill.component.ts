import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PopUpHostComponent } from 'src/app/pop-up-host/pop-up-host.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit {
  @Input() skill

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
