import { Component, OnInit, Type } from '@angular/core';
import { EditSkillService } from '../services/edit-skill/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';
import { Skill } from '../interfaces/skill';
import { PopUpService } from '../services/pop-up/pop-up.service';
import { PopUpConfirmationComponent } from '../pop-up/pop-up-confirmation/pop-up-confirmation.component';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators, ValidationErrors } from '@angular/forms';


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
  editSkillForm: FormGroup;

  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService,
    private popUp: PopUpService,
    private fb: FormBuilder
    ) { }

    ngDoCheck(){
      console.log(this.editSkillForm)
    }
  
  initForm(data) {
      this.editSkillForm = this.fb.group({
        skillName: [data.name,{
          validators: [
            Validators.maxLength(50), 
            Validators.required,
            Validators.minLength,
            Validators.pattern('[A-Za-zа-яА-Я\s\-]*')
          ], 
          updateOn: 'blur'}],
        skillType: [data.type],
        telephonyQueues: [data.telephonyQueues],
        queueGroup: [data.selectedQueueGroups]
      },{
        validators: [
          this.telephonyQueuesValidator
        ], 
        updateOn: 'change'});
  }
  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get())
        .pipe(
            map((skill:any) => { 
              this.automateId = Object.keys(skill).join();
              return skill
            })
        )
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(skill => {
          this.skill = skill[this.automateId];
          this.initForm(skill[this.automateId]);
        });
  }

  getPopUp() {
      this.popUp.view(PopUpConfirmationComponent);
  }

  ngOnDestroy() {
      this.unsubscriber.next(null);
      this.unsubscriber.complete();
  }

  getFormControl(controlName: string): AbstractControl {
    return this.editSkillForm.get(controlName);
  }

  telephonyQueuesValidator(control: FormGroup): ValidationErrors {
    const skillType = control.get('skillType').value;
    let telephonyQueues = control.get('telephonyQueues').value.length;

    if(skillType === "ручной"){
      if(telephonyQueues > 2){
        return {
          custom: "Для ручного типа не более 2 очередей"
        }
      }
      return null;
    } 
    if(skillType === "телефония") {
      if(telephonyQueues > 4){
        return {
          custom: "Для типа телефонии не более 4 очередей"
        }
      }
      return null;
    }
  }
  
}
