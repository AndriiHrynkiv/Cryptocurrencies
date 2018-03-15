import { Component, OnInit } from '@angular/core';
import { MyCurrencyListService } from '../services/my-currency-list.service';


@Component({
  selector: 'app-my-cryptocurrency',
  templateUrl: './my-cryptocurrency.component.html',
  styleUrls: ['./my-cryptocurrency.component.scss']
})
export class MyCryptocurrencyComponent implements OnInit {
  myItems: Array<any>;
  constructor(private _MyCurrencyListService: MyCurrencyListService) { }

  ngOnInit() {
    this._MyCurrencyListService.curentList.subscribe(itemsList => this.myItems = itemsList ) 
  }

  onDeleteItem(item): void {
    let currentItem: any;
    let index: number;
    item.isSelected = false;
    
    index = this.myItems.indexOf(item);
    event.stopPropagation();
    this.myItems.splice(index,1);
    localStorage.setItem('my_currency', JSON.stringify(this.myItems));
  }
}
