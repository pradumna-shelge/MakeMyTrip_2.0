import { TestBed } from '@angular/core/testing';

import { AireLineService } from './aire-line.service';

describe('AireLineService', () => {
  let service: AireLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AireLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
