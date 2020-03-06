import { Component, OnInit, Type } from '@angular/core';
import { EditSkillService } from '../services/edit-skill/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';
import { Skill } from '../interfaces/skill';
import { PopUpService } from '../services/pop-up/pop-up.service';
import { PopUpConfirmationComponent } from '../pop-up/pop-up-confirmation/pop-up-confirmation.component';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less'],
  providers: [SkillIdService]
})
export class EditPageComponent implements OnInit {
  skill: Skill;
  automateId: string;
  unsubscriber = new Subject();


  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService,
    private popUp: PopUpService
    ) { }

  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get())
        .pipe(
            map((skill:any) => { 
              this.automateId = Object.keys(skill).join();
              return skill
            })
        )
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(skill => this.skill = skill[this.automateId]);
  }

  getPopUp() {
      this.popUp.view(PopUpConfirmationComponent);
  }

  ngOnDestroy() {
      this.unsubscriber.next(null);
      this.unsubscriber.complete();
  }
}
