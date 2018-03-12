import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyDescriptionComponent } from './cryptocurrency-description.component';

describe('CryptocurrencyDescriptionComponent', () => {
  let component: CryptocurrencyDescriptionComponent;
  let fixture: ComponentFixture<CryptocurrencyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
