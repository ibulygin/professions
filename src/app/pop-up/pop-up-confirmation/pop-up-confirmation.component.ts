import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/popUP/pop-up.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { SkillIdService } from 'src/app/services/skillId/skillId.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.less'],
  providers:[
    SkillIdService
  ]
})
export class PopUpConfirmationComponent{

  constructor(
      private popUp: PopUpService,
      private skillsService: SkillsService,
      private skillIdService: SkillIdService,
      private router: Router,
      ) { }

  close() {
      this.popUp.close();
  }

  delete() {
    let id = this.skillIdService.getAutomationId();
    this.skillsService.removeSkill(id).subscribe(()=>{
        this.router.navigateByUrl('');
        this.popUp.close();
    });
  }
}
