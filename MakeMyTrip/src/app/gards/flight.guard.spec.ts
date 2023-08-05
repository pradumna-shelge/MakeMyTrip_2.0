import { TestBed } from '@angular/core/testing';

import { FlightGuard } from './flight.guard';

describe('FlightGuard', () => {
  let guard: FlightGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FlightGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
