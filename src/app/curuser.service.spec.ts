import { TestBed } from '@angular/core/testing';

import { CuruserService } from './curuser.service';

describe('CuruserService', () => {
  let service: CuruserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuruserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
