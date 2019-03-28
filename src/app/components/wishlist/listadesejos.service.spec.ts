import { TestBed } from '@angular/core/testing';

import { ListadesejosService } from './listadesejos.service';

describe('ListadesejosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadesejosService = TestBed.get(ListadesejosService);
    expect(service).toBeTruthy();
  });
});
