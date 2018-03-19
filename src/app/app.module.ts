import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
