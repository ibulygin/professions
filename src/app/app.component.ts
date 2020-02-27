import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


const url = 'https://professions-f6d7d.firebaseio.com';
const req = 
  {
    "description" : "add Skill",
    "id" : "5",
    "name" : "Igor",
    "selectedQueueGroups" : "Users",
    "telephonyQueues" : [ "Очередь для исходящих", "Очередь для входящих " ],
    "type" : "ручной"
  };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'professions';
  constructor(private http: HttpClient) {}

  getData(){
    console.log('click')
    return this.http.get(`${url}/skills.json`);
  }

  setData() {
    return this.http.post(`${url}/skills.json`, req)
  }

  loadData() {
    this.getData().subscribe((data) => console.log(data));
  }

  setMyData() {
    this.setData().subscribe(data => console.log(data));
  }
  
}
