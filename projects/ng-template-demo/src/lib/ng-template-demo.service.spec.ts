import { TestBed } from '@angular/core/testing';

import { NgTemplateDemoService } from './ng-template-demo.service';

describe('NgTemplateDemoService', () => {
  let service: NgTemplateDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTemplateDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
