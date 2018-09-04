import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrdpocHomeComponent } from './ngrdpoc-home.component';

describe('NgrdpocHomeComponent', () => {
  let component: NgrdpocHomeComponent;
  let fixture: ComponentFixture<NgrdpocHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrdpocHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrdpocHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
