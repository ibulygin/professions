import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.less']
})
export class UiInputComponent {
  @Input() controlName: AbstractControl;

  ngOnInit() {
  }
}
