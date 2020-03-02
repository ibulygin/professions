import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { UiKitModule } from '../shared/ui-kit.module';
import { SkillsTypeComponent } from './skills-type/skills-type.component';
import { QueueGroupsComponent } from './queue-groups/queue-groups.component';
import { TelephonyQueueComponent } from './telephony-queue/telephony-queue.component';
import { EditPageModuleRoutingModule } from './edit-page-routing.module';
import { EditSkillService } from '../services/editSkil/editSkill.service';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    EditPageComponent, 
    SkillsTypeComponent, 
    QueueGroupsComponent, 
    TelephonyQueueComponent
  ],
  imports: [
    CommonModule,
    UiKitModule,
    EditPageModuleRoutingModule,
    FormsModule
  ],
  providers: [
    EditSkillService
  ],
  exports: [
    EditPageComponent, 
    SkillsTypeComponent,
    QueueGroupsComponent,
    TelephonyQueueComponent
  ]
})
export class EditPageModule { }
