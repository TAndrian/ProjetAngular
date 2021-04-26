import { TestBed } from '@angular/core/testing';

import { PokeAPIServicesService } from './poke-apiservices.service';

describe('PokeAPIServicesService', () => {
  let service: PokeAPIServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeAPIServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
