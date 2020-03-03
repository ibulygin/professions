import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.less']
})
export class UiButtonComponent implements OnInit {
  isCancelStyle: boolean = false;
  isConfirmationStyle: boolean = false;
  isDeleteStyle: boolean = false;
  
  @Input() buttonStyle: string;

  defineButtonStyle() {
    switch (this.buttonStyle) {
      case 'button_cancel':
        this.isCancelStyle = true;
        break;
      case 'button_confirmation':
        this.isConfirmationStyle = true;
        break;
      case 'button_delete':
        this.isDeleteStyle = true;
        break;
    }
  }

  constructor() {}

  ngOnInit() {
    this.defineButtonStyle();
  }

  getStyle() {
    return {
      button_cancel: this.isCancelStyle,
      button_confirmation: this.isConfirmationStyle,
      button_delete: this.isDeleteStyle,
      button: true
    }
  }
}
