import { TestBed } from '@angular/core/testing';

import { JwtVerifierService } from './jwt-verifier.service';

describe('JwtVerifierService', () => {
  let service: JwtVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtVerifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
