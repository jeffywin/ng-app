import { TestBed } from '@angular/core/testing';

import { AutuGuardService } from './autu-guard.service';

describe('AutuGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutuGuardService = TestBed.get(AutuGuardService);
    expect(service).toBeTruthy();
  });
});
