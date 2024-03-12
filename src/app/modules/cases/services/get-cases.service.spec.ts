import { TestBed } from '@angular/core/testing';

import { GetCasesService } from './get-cases.service';

describe('GetCasesService', () => {
  let service: GetCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
