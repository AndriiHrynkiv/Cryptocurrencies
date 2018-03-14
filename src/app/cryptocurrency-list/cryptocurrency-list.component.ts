import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { cryptocurrencyServices } from '../services/cryptocurrency.service';


@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  cryptocurrency: Array<any>;
  viewItems: Array<any>;
  MyItems: Array<any>;

  constructor(private _cryptocurrencyServices: cryptocurrencyServices) { }

  ngOnInit(): void {
    this._cryptocurrencyServices.getCryptocurrencies()
      .subscribe(data => {
        this.cryptocurrency = data;
        this.viewItems = this.cryptocurrency.slice(0, 12);
      });
  }

  onSelectToMyCurrensy(item): void {
  
    this.MyItems = JSON.parse(localStorage.getItem('my_currency'));

    if (this.MyItems.length > 0) {
      let ite: any;
      for (ite of this.MyItems) {
        if (ite.name === item.name) {
          return;
        }
      }
    } 
    event.stopPropagation();
      this.MyItems.push(item);
      localStorage.setItem('my_currency', JSON.stringify(this.MyItems));
  }

  onAddMoreItems(): void {
    let currentItemsArray: Array<object> = this.viewItems;
    let lastIndex: number = currentItemsArray.length;
    let newItemsArray = this.cryptocurrency.slice(lastIndex, lastIndex + 8);
    this.viewItems = currentItemsArray.concat(newItemsArray);
  }
}
