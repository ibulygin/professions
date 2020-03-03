import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SkillsService } from '../services/skills/skills.service';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.less'],
  
})
export class SkillsPageComponent implements OnInit {

  skills: Skill;

  constructor(private skillsService: SkillsService ) { }

  ngOnInit() {
      this.skillsService.getSkills()
          .subscribe((skills) => this.skills = skills)
  }

}
