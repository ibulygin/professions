import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  OnInit
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  AbstractControl,
  Validators
} from '@angular/forms';



@Component({
  selector: 'app-telephony-queue',
  templateUrl: './telephony-queue.component.html',
  styleUrls: ['./telephony-queue.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => TelephonyQueueComponent)
  }]
})
export class TelephonyQueueComponent implements OnInit, ControlValueAccessor {
  onChange: (control: AbstractControl) => void;
  onToched: () => void;

  constructor(
    private fb: FormBuilder
  ) {}
  isVisible: boolean = false;
  form: FormArray
  ngOnInit() {}


  writeValue(arr: any): void {
    this.form = new FormArray([]);
    for (let value of arr) {
      this.form.push(new FormControl(value))
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onToched = fn;
  }

  addTelephoneQueue(): void {
    this.form.push(new FormControl('Новая очередь'));
    this.onChange(this.form);
    this.isVisible = false;
  }

  doBlur() {
    this.onToched();
    console.log('blur')
  }

  deleteTelephoneQueue() {
    if (this.form.controls.length > 1) {
      this.form.removeAt(this.form.controls.length - 1);
      this.onChange(this.form)
    }
    if (this.form.controls.length === 1) {
      this.isVisible = true;
    }
  }

  getStyle() {
    return {
      visible: this.isVisible
    };
  }
}
