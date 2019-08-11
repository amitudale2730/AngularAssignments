import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abc2Component } from './abc2.component';

describe('Abc2Component', () => {
  let component: Abc2Component;
  let fixture: ComponentFixture<Abc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
