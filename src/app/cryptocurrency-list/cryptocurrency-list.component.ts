import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cryptocurrencyServices } from '../services/cryptocurrency.service';
import { MyCurrencyListService } from '../services/my-currency-list.service';


@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  cryptocurrency: Array<any>;
  viewItems: Array<any>;
  viewItems1: Array<any>;
  myItems: Array<any>;
  private _listFilter: string;

  constructor(
    private _cryptocurrencyServices: cryptocurrencyServices,
    private _MyCurrencyListService: MyCurrencyListService,
  ) { }

   get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.viewItems1 = this.listFilter ? this.performFilter(this.listFilter) : this.viewItems;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.viewItems.filter((item) =>
    item.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this._MyCurrencyListService.curentList.subscribe(itemsList => this.myItems = itemsList);

    this._cryptocurrencyServices.getCryptocurrencies()
      .subscribe(data => {
        this.cryptocurrency = data;

        for (let n = 0; n < this.myItems.length; n++) {
          for (let m = 0; m < this.cryptocurrency.length; m++) {
            if (this.myItems[n].id === this.cryptocurrency[m].id) {
              this.cryptocurrency[m].isSelected = true;
            }
          }
        }
        this.viewItems = this.cryptocurrency.slice(0, 12);
        this.viewItems1 = this.viewItems;
      });
  }

  onSelectToMyCurrensy(item): void {

    if (this.myItems.length > 0) {
      let ite: any;
      for (ite of this.myItems) {
        if (ite.name === item.name) {
          return;
        }
      }
    }

    event.stopPropagation();
    item.isSelected = true;
    this.myItems.push(item);
    localStorage.setItem('my_currency', JSON.stringify(this.myItems));
  }

 
  onAddMoreItems(): void {
    let currentItemsArray: Array<object> = this.viewItems1;
    let lastIndex: number = currentItemsArray.length;
    let newItemsArray = this.cryptocurrency.slice(lastIndex, lastIndex + 8);
    this.viewItems1 = currentItemsArray.concat(newItemsArray);

  }


 
}