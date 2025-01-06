import { TestBed } from '@angular/core/testing';

import { Angular19Service } from './angular19.service';

describe('Angular19Service', () => {
  let service: Angular19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
