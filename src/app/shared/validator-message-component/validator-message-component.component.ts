import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-message-component',
  templateUrl: './validator-message-component.component.html',
  styleUrls: ['./validator-message-component.component.less']
})
export class ValidatorMessageComponentComponent {
@Input() field: FormControl;

ngOnInit() {
  console.log(this.field.errors)
}

get validatorMessages() {
  const field = this.field;
  const errors = [];
  const config = {
    required: "Field is required",
    pattern: "Только буквы, пробелы и дефис "
  }

  if(!field || !field.errors) {
    return false;
  }

  if(field.errors.hasOwnProperty('maxlength')) {
    config['maxlength'] = `Maximum length ${this.field.errors.maxlength.requiredLength}`;
  }

  if(field.errors.hasOwnProperty('minlength')) {
    config['minlength'] = `Minimum length ${this.field.errors.minlength.requiredLength}`;
  }

  if(field.errors.hasOwnProperty('custom')) {
    config['custom'] = field.errors.custom;
  }

  Object.keys(field.errors).forEach((error) => {
    errors.push(config[error]);
  });

  return errors
}

}
