import { Component, OnInit } from '@angular/core';
import { cryptocurrencyServices } from '../services/cryptocurrency.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cryptocurrency: Array<any>;
  constructor(private _cryptocurrencyServices : cryptocurrencyServices ) { }

  ngOnInit(): void {
    this._cryptocurrencyServices.getCryptocurrencies()
        .subscribe(data => this.cryptocurrency = data);  
  }
}
