import { Component, OnDestroy } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up/pop-up.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { SkillIdService } from 'src/app/services/skillId/skillId.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.less'],
  providers:[
    SkillIdService
  ]
})
export class PopUpConfirmationComponent implements OnDestroy {
  unsubscriber = new Subject();

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
    this.skillsService.removeSkill(id)
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(()=>{
            this.router.navigateByUrl('');
            this.popUp.close();
    });
  }
  ngOnDestroy() {
	  this.unsubscriber.next(null);
	  this.unsubscriber.complete();
  }
}
