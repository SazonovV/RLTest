import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsWindowComponent } from './buttons-window.component';

describe('ButtonsWindowComponent', () => {
  let component: ButtonsWindowComponent;
  let fixture: ComponentFixture<ButtonsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
