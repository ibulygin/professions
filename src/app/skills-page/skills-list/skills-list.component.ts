import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.less']
})
export class SkillsListComponent implements OnInit {
  @Input() skills;

  activeSkillId: string;
  
  constructor() { }

  ngOnInit() {
  }
  

  getValue(id : string) {
    this.activeSkillId = id;
  }
}
