import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewJourneyComponent } from './review-journey.component';

describe('ReviewJourneyComponent', () => {
  let component: ReviewJourneyComponent;
  let fixture: ComponentFixture<ReviewJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
