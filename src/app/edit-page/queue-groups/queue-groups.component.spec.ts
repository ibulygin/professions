import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueGroupsComponent } from './queue-groups.component';

describe('QueueGroupsComponent', () => {
  let component: QueueGroupsComponent;
  let fixture: ComponentFixture<QueueGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
