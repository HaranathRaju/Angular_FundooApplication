import { TestBed } from '@angular/core/testing';

import { LabelService } from './label';

describe('Label', () => {
  let service: LabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
