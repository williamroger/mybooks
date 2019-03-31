import { TestBed } from '@angular/core/testing';

import { LibrarybooksService } from './librarybooks.service';

describe('LibrarybooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrarybooksService = TestBed.get(LibrarybooksService);
    expect(service).toBeTruthy();
  });
});
