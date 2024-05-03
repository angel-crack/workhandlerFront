import { TestBed } from '@angular/core/testing';

import { SharedDataFromModalService } from './shared-data-from-modal.service';

describe('SharedDataFromModalService', () => {
  let service: SharedDataFromModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataFromModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
