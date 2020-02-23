import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.less']
})
export class UiButtonComponent implements OnInit {
  @Input() buttonStyle: string;

  isCancelStyle: boolean = false;
  isConfirmationStyle:boolean = false;
  isDeleteStyle:boolean = false;

  defineButtonStyle(){
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
    
  constructor() { }

  ngOnInit() {
    this.defineButtonStyle();
  }

  

  getStyle() {
    console.log(this.buttonStyle)
  }
}
