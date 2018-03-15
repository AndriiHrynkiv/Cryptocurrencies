import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MyCurrencyListService {

storageItems: Array<any> = JSON.parse(localStorage.getItem('my_currency'));
private _myItems = new BehaviorSubject<any>(this.storageItems);
curentList = this._myItems.asObservable();

  constructor() { }

  changeMyItemsList(itemsList: Array<any>) {
    this._myItems.next(itemsList);
  }
}
