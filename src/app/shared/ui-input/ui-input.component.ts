import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.less'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiInputComponent),
    multi: true
   }]
})
export class UiInputComponent implements ControlValueAccessor{
  private _value;

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }
  onChange(_: any) {
    this.registerOnTouched();
  }

  writeValue(value: any) {
    this.value = value;
   }
   
  
   registerOnChange(fn) {
    this.onChange = fn;
   }
  
   registerOnTouched() {
     
   }
  
}
