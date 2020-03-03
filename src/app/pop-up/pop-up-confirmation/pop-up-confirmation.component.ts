import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
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
