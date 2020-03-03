import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill

  @Output() onClick = new EventEmitter();

  constructor() { }
}
