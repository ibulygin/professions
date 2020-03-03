import { Component } from '@angular/core';

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
export class AppComponent { }
