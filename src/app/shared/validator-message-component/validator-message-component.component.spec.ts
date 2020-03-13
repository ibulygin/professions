import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorMessageComponentComponent } from './validator-message-component.component';

describe('ValidatorMessageComponentComponent', () => {
  let component: ValidatorMessageComponentComponent;
  let fixture: ComponentFixture<ValidatorMessageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorMessageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
