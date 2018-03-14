import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CryptocurrencyListComponent } from '../cryptocurrency-list/cryptocurrency-list.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  @ViewChild(CryptocurrencyListComponent) myCurrencyViewChild: CryptocurrencyListComponent;
  
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.myCurrencyViewChild);
  }

}



