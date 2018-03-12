import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cryptocurrencyServices } from '../services/cryptocurrency.service';

@Component({
  selector: 'app-cryptocurrency-description',
  templateUrl: './cryptocurrency-description.component.html',
  styleUrls: ['./cryptocurrency-description.component.scss']
})
export class CryptocurrencyDescriptionComponent implements OnInit {
  cryptocurrencyItem: Object;

  constructor(
    private _route: ActivatedRoute,
    private _cryptocurrencyServices: cryptocurrencyServices
  ) {}

  ngOnInit() {
    let cryptocurrencyName = this._route.snapshot.paramMap.get('cryptocurrencyId');
    this._cryptocurrencyServices.getChosenCryptocurrencyItem(cryptocurrencyName)
      .subscribe(data => {
        this.cryptocurrencyItem = data[0];
        console.log( this.cryptocurrencyItem)
      });
  }

}
