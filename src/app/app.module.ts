import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { CryptocurrencyDescriptionComponent } from './cryptocurrency-description/cryptocurrency-description.component';
import { CryptocurrencyListComponent } from './cryptocurrency-list/cryptocurrency-list.component';
import { MyCryptocurrencyComponent } from './my-cryptocurrency/my-cryptocurrency.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeComponent,
    CryptocurrencyDescriptionComponent,
    CryptocurrencyListComponent,
    MyCryptocurrencyComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'loggin', component: LogginComponent},
      {
        path: 'home', 
        component: HomeComponent,
        children: [
          {path: 'cryptocurrency-list', component: CryptocurrencyListComponent},
          {path: 'cryptocurrency-description/:cryptocurrencyId', component: CryptocurrencyDescriptionComponent},
          {path: 'my-cryptocurrency',component: MyCryptocurrencyComponent},
          {path: '', redirectTo: 'cryptocurrency-list', pathMatch: 'full'},
        ]
      },
      {path: '', redirectTo: 'loggin', pathMatch: 'full'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
