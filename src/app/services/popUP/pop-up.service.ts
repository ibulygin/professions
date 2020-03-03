import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  popUp = new Subject();
  
  constructor() { }

  view(pupUpClass) {
      this.popUp.next(pupUpClass);
  }
}
