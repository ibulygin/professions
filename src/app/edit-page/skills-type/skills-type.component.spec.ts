import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTypeComponent } from './skills-type.component';

describe('SkillsTypeComponent', () => {
  let component: SkillsTypeComponent;
  let fixture: ComponentFixture<SkillsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
