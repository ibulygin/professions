import { Component, OnInit, Input } from '@angular/core';
import { SkillIdService } from '../../services/skillId/skillId.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.less']
})
export class SkillsListComponent implements OnInit {
  @Input() skills;

  activeSkillId: string;
  
  constructor(private skillIdService: SkillIdService) { }

  ngOnInit() {
  }
  

  getValue(id : string) {
    this.skillIdService.set(id);
    this.activeSkillId = id;
  }
}
