import { TestBed } from '@angular/core/testing';

import { DynamicComponentsDemoService } from './dynamic-components-demo.service';

describe('DynamicComponentsDemoService', () => {
  let service: DynamicComponentsDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentsDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
