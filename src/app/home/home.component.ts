import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyCurrencyListService } from '../services/my-currency-list.service';
import { CryptocurrencyListComponent } from '../cryptocurrency-list/cryptocurrency-list.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  @ViewChild(CryptocurrencyListComponent) myCurrencyViewChild: CryptocurrencyListComponent;
  

  myItems: Array<any>;
  constructor(private _MyCurrencyListService: MyCurrencyListService) {}

  ngOnInit() {
    this._MyCurrencyListService.curentList.subscribe(itemsList => this.myItems = itemsList ) 
  }

  ngAfterViewInit() {
    console.log(this.myCurrencyViewChild);
  }

}



