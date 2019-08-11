import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abc1Component } from './abc1.component';

describe('Abc1Component', () => {
  let component: Abc1Component;
  let fixture: ComponentFixture<Abc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
