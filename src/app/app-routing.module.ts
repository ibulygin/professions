import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillComponent } from './skills-page/skill/skill.component';
import { AboutComponent } from './skills-page/about/about.component';
import { TrainComponent } from './skills-page/train/train.component';
import { EditPageComponent } from './edit-page/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', component: SkillsPageComponent},
  { path: 'edit/:id', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
