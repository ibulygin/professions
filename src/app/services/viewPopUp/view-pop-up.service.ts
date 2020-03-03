import { Injectable } from '@angular/core';
import { AdItem } from '../../ad-item';
import { PopUpConfirmationComponent } from 'src/app/pop-up/pop-up-confirmation/pop-up-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ViewPopUpService {

  constructor() { }

  getPopUp() {
    return new AdItem(PopUpConfirmationComponent);
  }
}
