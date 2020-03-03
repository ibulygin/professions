import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills-type',
  templateUrl: './skills-type.component.html',
  styleUrls: ['./skills-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsTypeComponent {
  @Input() type;
  
  constructor() { }
}
