import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cryptocurrency',
  templateUrl: './my-cryptocurrency.component.html',
  styleUrls: ['./my-cryptocurrency.component.scss']
})
export class MyCryptocurrencyComponent implements OnInit {
  myItems: Array<any>;
  constructor() { }

  ngOnInit() {
    this.myItems = JSON.parse(localStorage.getItem('my_currency'));
  }

  onDeleteItem(item): void {
    let currentItem: any;
    let index: number;
  
    index = this.myItems.indexOf(item);
    event.stopPropagation();
    this.myItems.splice(index,1);
    localStorage.setItem('my_currency', JSON.stringify(this.myItems));
  }
}
