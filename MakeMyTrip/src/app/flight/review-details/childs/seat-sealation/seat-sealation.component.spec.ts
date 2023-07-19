import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSealationComponent } from './seat-sealation.component';

describe('SeatSealationComponent', () => {
  let component: SeatSealationComponent;
  let fixture: ComponentFixture<SeatSealationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatSealationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatSealationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
