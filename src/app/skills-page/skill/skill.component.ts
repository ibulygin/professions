import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopUpHostComponent } from 'src/app/pop-up-host/pop-up-host.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  @Input() skill

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.popUpHostComponent.load();
  }

}
