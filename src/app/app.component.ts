import { Component } from '@angular/core';
import { cryptocurrencyServices } from './services/cryptocurrency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [cryptocurrencyServices]
})
export class AppComponent {
  MyItems: Array<any>;
  
  ngOnInit(): void {
    this.MyItems = [];
    localStorage.setItem('my_currency', JSON.stringify(this.MyItems))
  }
  title = 'app';
}
