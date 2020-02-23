import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.less']
})
export class SkillsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skills = [ {
    "description" : "Коронавирус лег на папирус",
    "id" : "1",
    "name" : "SME",
    "selectedQueueGroups" : "Users",
    "telephonyQueues" : [ "Очередь для исходящих", "Очередь для входящих " ],
    "type" : "ручной",
    "src": "assets/img/people.svg"
  }, {
    "description" : "Коронавирус лег на папирус",
    "id" : "2",
    "name" : "Автострахование",
    "selectedQueueGroups" : "Operators",
    "telephonyQueues" : [ "Очередь для входящих " ],
    "type" : "телефония",
    "src": "assets/img/people.svg"
  }, {
    "description" : "Коронавирус лег на папирус",
    "id" : "3",
    "name" : "Телемаркетинг",
    "selectedQueueGroups" : "Operators",
    "telephonyQueues" : [ "Очередь для исходящих" ],
    "type" : "ручной",
    "src": "assets/img/people.svg"
  }, {
    "description" : "Коронавирус лег на папирус",
    "id" : "4",
    "name" : "Collection",
    "selectedQueueGroups" : "Users",
    "telephonyQueues" : [ "Очередь для исходящих", "Очередь для входящих " ],
    "type" : "ручной",
    "src": "assets/img/people.svg"
  } ]
}
