import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MyCurrencyListService {

storageItems: Array<any> = JSON.parse(localStorage.getItem('my_currency'));
private _userData = new BehaviorSubject<any>(this.storageItems);
currentUserData = this._userData.asObservable();

  constructor() { }

  changeMyItemsList(myUserData: Array<any>) {
    this._userData.next(myUserData);
  }
}
