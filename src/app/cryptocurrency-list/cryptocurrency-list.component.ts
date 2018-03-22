import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cryptocurrencyServices } from '../services/cryptocurrency.service';
import { MyCurrencyListService } from '../services/my-currency-list.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {

  cryptocurrency: Array<any>;
  private _listFilter: string;
  myUser: any;
  viewItems: Array<any>;
  viewItems1: Array<any>;

  constructor(
    private _cryptocurrencyServices: cryptocurrencyServices,
    private _MyCurrencyListService: MyCurrencyListService,
    private authService: AuthService
  ) { }

   get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.viewItems1 = this.listFilter ? this.performFilter(this.listFilter) : this.viewItems;
  }



  ngOnInit() {
    this._MyCurrencyListService.currentUserData.subscribe(myUserData => this.myUser = myUserData);

    this._cryptocurrencyServices.getCryptocurrencies()
      .subscribe(data => {
        this.cryptocurrency = data;
        for (let n = 0; n < this.myUser.userList.length; n++) {
          for (let m = 0; m < this.cryptocurrency.length; m++) {
            if (this.myUser.userList[n].id === this.cryptocurrency[m].id) {
              this.cryptocurrency[m].isSelected = true;
            }
          }
        }
        
        this.viewItems = this.cryptocurrency.slice(0, 12);
        this.viewItems1 = this.viewItems;
      });
  }

  onSelectToMyCurrensy(item): void {

    // this.authService.sentData (item)

    if (this.myUser.userList.length > 0) {
      let ite: any;
      for (ite of this.myUser) {
        if (ite.name === item.name) {
          return;
        }
      }
    }

    event.stopPropagation();
    item.isSelected = true;
    this.myUser.userList.push(item);
    this.authService.updateUserData(this.myUser);
    localStorage.setItem('my_currency', JSON.stringify(this.myUser));
  }
 
  onAddMoreItems(): void {
    
    // this.authService.getData();

    let currentItemsArray: Array<object> = this.viewItems1;
    let lastIndex: number = currentItemsArray.length;
    let newItemsArray = this.cryptocurrency.slice(lastIndex, lastIndex + 8);
    this.viewItems1 = currentItemsArray.concat(newItemsArray);

  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cryptocurrency.filter((item) =>
    item.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


 
}
