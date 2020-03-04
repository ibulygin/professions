import { Component, OnInit, Type } from '@angular/core';
import { EditSkillService } from '../services/editSkil/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';
import { Skill } from '../interfaces/skill';
import { PopUpService } from '../services/popUP/pop-up.service';
import { PopUpConfirmationComponent } from '../pop-up/pop-up-confirmation/pop-up-confirmation.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less'],
  providers: [SkillIdService]
})
export class EditPageComponent implements OnInit {
  skill: Skill;
  automateId: any;

  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService,
    private popUp: PopUpService
    ) { }

  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get())
        .subscribe(
          (skill) => {
              this.automateId = Object.keys(skill).join();
              this.skill = skill[this.automateId];
              }
          );
  }

  getPopUp() {
    this.popUp.view(PopUpConfirmationComponent);
  }

}
