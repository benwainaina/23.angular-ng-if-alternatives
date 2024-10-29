import { TestBed } from '@angular/core/testing';

import { NgSwitchDemoService } from './ng-switch-demo.service';

describe('NgSwitchDemoService', () => {
  let service: NgSwitchDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSwitchDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
