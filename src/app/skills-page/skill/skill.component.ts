import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  @Input() name;
  @Input() description;
  @Input() src;
  @Input() id; 

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
