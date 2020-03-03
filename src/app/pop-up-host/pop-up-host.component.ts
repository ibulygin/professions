import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-pop-up-host',
  templateUrl: './pop-up-host.component.html',
  styleUrls: ['./pop-up-host.component.less']
})
export class PopUpHostComponent implements OnInit {
  @Input() popUps: AdItem;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.load();
  }

  load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.popUps.component);
    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);
  }
}
