import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class cryptocurrencyServices {
  private _cryptocurrencyUrl = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private _http: HttpClient) { }


  getCryptocurrencies () {
   return this._http.get(this._cryptocurrencyUrl)
              .catch(this.hendleError);
  }

  private  hendleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
