import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SkillsService } from '../services/skills/skills.service';
import { Skill } from '../interfaces/skill';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.less'],
  
})
export class SkillsPageComponent implements OnInit {

  skills: Skill;
  unsubscriber = new Subject();


  constructor(private skillsService: SkillsService ) { }

  ngOnInit() {
      this.skillsService.getSkills()
          .pipe(takeUntil(this.unsubscriber))
          .subscribe((skills) => this.skills = skills)
  }

}
