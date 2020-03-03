import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { PopUpService } from 'src/app/services/popUP/pop-up.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { SkillIdService } from 'src/app/services/skillId/skillId.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.less']
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
    this.skillsService.removeSkill(this.skillIdService.get()).subscribe(()=>{
      console.log("successfully");
      this.router.navigateByUrl('')
    });;
  }
}
