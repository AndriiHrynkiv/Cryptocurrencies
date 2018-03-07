import { TestBed, inject } from '@angular/core/testing';
import { cryptocurrencyServices } from './cryptocurrency.service';

describe('cryptocurrencyServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [cryptocurrencyServices]
    });
  });

  it('should be created', inject([cryptocurrencyServices], (service: cryptocurrencyServices) => {
    expect(service).toBeTruthy();
  }));
});
