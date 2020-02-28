import { Component, OnInit } from '@angular/core';
import { EditSkillService } from '../services/editSkil/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less']
})
export class EditPageComponent implements OnInit {
  skill: any;

  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService
    ) { }

  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get()).subscribe((skill) => this.skill = skill );
  }

  get() {
    console.log(this.skill);
  }

}
