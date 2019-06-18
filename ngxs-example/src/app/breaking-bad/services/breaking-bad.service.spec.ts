import { TestBed } from '@angular/core/testing';

import { BreakingBadService } from './breaking-bad.service';

describe('BreakingBadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakingBadService = TestBed.get(BreakingBadService);
    expect(service).toBeTruthy();
  });
});
