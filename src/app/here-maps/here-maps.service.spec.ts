import { TestBed, inject } from '@angular/core/testing';

import { HereMapsService } from './here-maps.service';

describe('HereMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HereMapsService]
    });
  });

  it('should be created', inject([HereMapsService], (service: HereMapsService) => {
    expect(service).toBeTruthy();
  }));
});
