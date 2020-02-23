import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiSearchInputComponent } from './ui-search-input/ui-search-input.component';
import { UiButtonComponent } from './ui-button/ui-button.component';



@NgModule({
  declarations: [
    UiInputComponent, 
    UiSearchInputComponent, 
    UiButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiInputComponent, 
    UiSearchInputComponent, 
    UiButtonComponent
  ]
})
export class UiKitModule { }
