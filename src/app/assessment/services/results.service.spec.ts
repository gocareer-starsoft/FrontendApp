import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('CareersService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
