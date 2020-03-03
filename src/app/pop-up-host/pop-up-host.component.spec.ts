import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHostComponent } from './pop-up-host.component';

describe('PopUpHostComponent', () => {
  let component: PopUpHostComponent;
  let fixture: ComponentFixture<PopUpHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
