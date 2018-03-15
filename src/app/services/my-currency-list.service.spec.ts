import { TestBed, inject } from '@angular/core/testing';

import { MyCurrencyListService } from './my-currency-list.service';

describe('MyCurrencyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCurrencyListService]
    });
  });

  it('should be created', inject([MyCurrencyListService], (service: MyCurrencyListService) => {
    expect(service).toBeTruthy();
  }));
});
