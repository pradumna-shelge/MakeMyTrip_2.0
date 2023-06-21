import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDataComponent } from './journey-data.component';

describe('JourneyDataComponent', () => {
  let component: JourneyDataComponent;
  let fixture: ComponentFixture<JourneyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
