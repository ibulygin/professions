import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';
import { ViewPopUpService } from '../services/viewPopUp/view-pop-up.service';
import { PopUpService } from '../services/popUP/pop-up.service';


@Component({
  selector: 'app-pop-up-host',
  templateUrl: './pop-up-host.component.html',
  styleUrls: ['./pop-up-host.component.less'],
  providers:[ViewPopUpService]
})
export class PopUpHostComponent implements OnInit {
  popUps: AdItem;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private popUp: PopUpService
    ) { }

  ngOnInit() {
    this.popUp.event.subscribe((popUpClass: Type<any>) => this.load(popUpClass) )
    this.popUp.closes.subscribe(() => this.adHost.viewContainerRef.clear())
  }

  load(popUp: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(popUp);
    
    this.adHost.viewContainerRef.clear();
    this.adHost.viewContainerRef.createComponent(componentFactory);    
  }

  clear() {
    this.adHost.viewContainerRef.clear();
  }
}
