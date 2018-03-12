import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cryptocurrencyServices } from '../services/cryptocurrency.service';


@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  cryptocurrency: Array<object>;
  viewItems: Array<object>;

  constructor(private _cryptocurrencyServices: cryptocurrencyServices) { }

  ngOnInit(): void {
    this._cryptocurrencyServices.getCryptocurrencies()
      .subscribe(data => {
        this.cryptocurrency = data;
        this.viewItems = this.cryptocurrency.slice(0, 12);
      });
  }

  onAddMoreItems(): void {
    let currentItemsArray: Array<object> = this.viewItems;
    let lastIndex: number = currentItemsArray.length;
    let newItemsArray = this.cryptocurrency.slice(lastIndex, lastIndex+8);
    this.viewItems = currentItemsArray.concat(newItemsArray);
  }

}
