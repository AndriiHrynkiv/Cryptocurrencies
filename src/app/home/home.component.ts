import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyCurrencyListService } from '../services/my-currency-list.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  myItems: any;
  constructor(
    private _MyCurrencyListService: MyCurrencyListService,
    private _route: ActivatedRoute,
    private _router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this._MyCurrencyListService.currentUserData.subscribe(myUserData => this.myItems = myUserData);
  }
  ngAfterViewInit() {
    console.log(this.myItems.userName);
  }

  logOut(event) {
    event.preventDefault();
    this.authService.logout();
    // this._router.navigate(['loggin']);
  }


}



