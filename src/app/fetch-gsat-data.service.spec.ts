import { TestBed } from '@angular/core/testing';

import { FetchGsatDataService } from './fetch-gsat-data.service';

describe('FetchGsatDataService', () => {
  let service: FetchGsatDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGsatDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
