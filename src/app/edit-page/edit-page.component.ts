import { Component, OnInit } from '@angular/core';
import { EditSkillService } from '../services/editSkil/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less'],
  providers: [SkillIdService]
})
export class EditPageComponent implements OnInit {
  skill: any;
  automateId: any;

  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService,
    ) { }

  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get())
        .subscribe(
          (skill) => {
              this.automateId = Object.keys(skill).join();
              this.skill = skill[this.automateId];
              console.log(this.automateId)
          }
          );
  }

  get() {
    console.log(this.skill);
    console.log(this.automateId)
  }

}
