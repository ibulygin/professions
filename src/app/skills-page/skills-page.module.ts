import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './skills-page.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { UiKitModule } from '../shared/ui-kit.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsPageRoutingModule } from './skills-page-routing.module';



@NgModule({
  declarations: [
    SkillsPageComponent, 
    SkillComponent, 
    AboutComponent, 
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    UiKitModule,
    SkillsPageRoutingModule
  ],
  exports:[SkillsPageComponent]
})
export class SkillsPageModule { }
