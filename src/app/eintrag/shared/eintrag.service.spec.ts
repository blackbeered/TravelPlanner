/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EintragService } from './eintrag.service';

describe('EintragService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EintragService]
    });
  });

  it('should ...', inject([EintragService], (service: EintragService) => {
    expect(service).toBeTruthy();
  }));
});
