import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.less']
})
export class SkillsPageComponent implements OnInit {

  skills: any[];

  constructor(private skillsService: SkillsService ) { }

  ngOnInit() {
      this.skillsService.getSkills()
          .subscribe((skills) => this.skills = skills )
  }
}
