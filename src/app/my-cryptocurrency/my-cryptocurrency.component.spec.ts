import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCryptocurrencyComponent } from './my-cryptocurrency.component';

describe('MyCryptocurrencyComponent', () => {
  let component: MyCryptocurrencyComponent;
  let fixture: ComponentFixture<MyCryptocurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCryptocurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
