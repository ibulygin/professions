import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  event = new Subject();
  closes = new Subject <void> ();
  constructor( ) { 
    
  }

  view(pupUpClass: Type<any>) {
      this.event.next(pupUpClass);
  }

  close() {
    this.closes.next();
  }
}
