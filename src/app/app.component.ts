import { Component } from '@angular/core';
import { cryptocurrencyServices } from './services/cryptocurrency.service';
import { MyCurrencyListService } from './services/my-currency-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [cryptocurrencyServices, MyCurrencyListService]
})
export class AppComponent {

  
  ngOnInit(): void {}
  title = 'app';
}
