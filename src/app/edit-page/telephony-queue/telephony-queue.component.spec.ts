import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonyQueueComponent } from './telephony-queue.component';

describe('TelephonyQueueComponent', () => {
  let component: TelephonyQueueComponent;
  let fixture: ComponentFixture<TelephonyQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonyQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
