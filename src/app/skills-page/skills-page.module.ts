import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './skills-page.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { UiKitModule } from '../shared/ui-kit.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { TrainComponent } from './train/train.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SkillsPageComponent, 
    SkillComponent, 
    AboutComponent, 
    SkillsListComponent, 
    TrainComponent
  ],
  imports: [
    CommonModule,
    UiKitModule,
    AppRoutingModule
  ],
  exports:[SkillsPageComponent]
})
export class SkillsPageModule { }
