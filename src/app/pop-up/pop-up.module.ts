import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpDeleteComponent } from './pop-up-delete/pop-up-delete.component';
import { PopUpConfirmationComponent } from './pop-up-confirmation/pop-up-confirmation.component';

@NgModule({
  declarations: [
    PopUpDeleteComponent,
    PopUpConfirmationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PopUpDeleteComponent,
    PopUpConfirmationComponent
  ]
})
export class PopUpModule { }
