import { Component } from '@angular/core';
import { cryptocurrencyServices } from './services/cryptocurrency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [cryptocurrencyServices]
})
export class AppComponent {
  title = 'app';
}
