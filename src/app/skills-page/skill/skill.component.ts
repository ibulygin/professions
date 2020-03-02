import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  // @Input() name: string;
  // @Input() description: string;
  // @Input() src: string;
  // @Input() id: string; 
  @Input() skill

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
