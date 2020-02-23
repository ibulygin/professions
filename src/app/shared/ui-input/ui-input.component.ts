import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.less']
})
export class UiInputComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

}
