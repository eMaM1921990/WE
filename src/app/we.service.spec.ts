import { TestBed, inject } from '@angular/core/testing';

import { WeService } from './we.service';

describe('WeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeService]
    });
  });

  it('should be created', inject([WeService], (service: WeService) => {
    expect(service).toBeTruthy();
  }));
});
