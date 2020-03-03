import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.less']
})
export class PopUpConfirmationComponent{
  clear = new Subject<void>();
  
  constructor() { }
}
