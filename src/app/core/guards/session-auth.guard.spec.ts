import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionAuthGuard } from './session-auth.guard';

describe('sessionAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sessionAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
