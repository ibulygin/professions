import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: any;

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/data').valueChanges(); 
  }

  addData(stat) {
    this.af.list('/data').push(stat);
  }

  getData() {
    return this.items = this.af.list('/data').valueChanges();
  }
}
