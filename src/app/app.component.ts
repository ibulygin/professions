import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { SkillsService } from './services/skills/skills.service';
import { AdItem } from './ad-item';
import { ViewPopUpService } from './services/viewPopUp/view-pop-up.service';


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
  popUps: AdItem;

  constructor( private viewPopUpService: ViewPopUpService){}

  ngOnInit() {
      this.popUps = this.viewPopUpService.getPopUp();
  }
}
