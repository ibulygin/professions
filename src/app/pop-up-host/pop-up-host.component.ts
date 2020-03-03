import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';
import { ViewPopUpService } from '../services/viewPopUp/view-pop-up.service';


@Component({
  selector: 'app-pop-up-host',
  templateUrl: './pop-up-host.component.html',
  styleUrls: ['./pop-up-host.component.less'],
  providers:[ViewPopUpService]
})
export class PopUpHostComponent implements OnInit {
  popUps: AdItem;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewPopUpService: ViewPopUpService,
    ) { }

  ngOnInit() {
    this.popUps = this.viewPopUpService.getPopUp();
    // this.load();
  }

  load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.popUps.component);
    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    const component = viewContainerRef.createComponent(componentFactory);
    component.instance.clear.subscribe(()=> this.clear())
    
  }

  clear() {
    this.adHost.viewContainerRef.clear();
  }
}
