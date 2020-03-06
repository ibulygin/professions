import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  event = new Subject();
  closes = new Subject <void>();

  constructor( ) { 
    
  }

  view(popUpClass: Type<any>) {
      this.event.next(popUpClass);
  }

  close() {
    this.closes.next();
  }
}
