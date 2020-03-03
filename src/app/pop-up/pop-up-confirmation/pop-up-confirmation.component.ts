import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { PopUpService } from 'src/app/services/popUP/pop-up.service';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.less']
})
export class PopUpConfirmationComponent{

  constructor(private popUp: PopUpService) { }

  close() {
    this.popUp.close();
  }
}
