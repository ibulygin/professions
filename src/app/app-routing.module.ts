import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./skills-page/skills-page.module').then((m) => m.SkillsPageModule)
  },
  { 
    path: 'edit/:id', 
    loadChildren: () => import('./edit-page/edit-page.module').then((m) => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
