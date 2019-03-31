import { TestBed } from '@angular/core/testing';

import { ReadService } from './read.service';

describe('ReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadService = TestBed.get(ReadService);
    expect(service).toBeTruthy();
  });
});
