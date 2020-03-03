import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SkillIdService } from '../../services/skillId/skillId.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsListComponent {
  @Input() skills;

  activeSkillId: string;
  
  constructor() { }

  getValue(id : string) {
    this.activeSkillId = id;
  }
}
