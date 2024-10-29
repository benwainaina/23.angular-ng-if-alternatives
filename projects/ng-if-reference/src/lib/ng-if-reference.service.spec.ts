import { TestBed } from '@angular/core/testing';

import { NgIfReferenceService } from './ng-if-reference.service';

describe('NgIfReferenceService', () => {
  let service: NgIfReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIfReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
