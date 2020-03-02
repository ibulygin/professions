import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-type',
  templateUrl: './skills-type.component.html',
  styleUrls: ['./skills-type.component.less']
})
export class SkillsTypeComponent implements OnInit {
  @Input() type;
  constructor() { }

  ngOnInit() {
  }

}
