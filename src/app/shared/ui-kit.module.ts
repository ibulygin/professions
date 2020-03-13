import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiSearchInputComponent } from './ui-search-input/ui-search-input.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorMessageComponentComponent } from './validator-message-component/validator-message-component.component';



@NgModule({
  declarations: [
    UiInputComponent, 
    UiSearchInputComponent, 
    UiButtonComponent, 
    ValidatorMessageComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    UiInputComponent, 
    UiSearchInputComponent, 
    UiButtonComponent,
    ValidatorMessageComponentComponent
  ]
})
export class UiKitModule { }
