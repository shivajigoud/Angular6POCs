import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeLandingComponent } from './college-landing.component';

describe('CollegeLandingComponent', () => {
  let component: CollegeLandingComponent;
  let fixture: ComponentFixture<CollegeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
