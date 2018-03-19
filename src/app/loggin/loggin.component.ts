import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
// import { MyCurrencyListService } from '../services/my-currency-list.service';
// import { cryptocurrencyServices } from '../services/cryptocurrency.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  myform: FormGroup;
  userData: any;

  constructor(private fb: FormBuilder,
    // private _cryptocurrencyServices: cryptocurrencyServices,
    // private _MyCurrencyListService: MyCurrencyListService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this._MyCurrencyListService.currentUserData.subscribe(myUserData => this.userData = myUserData);
    this.myform = this.fb.group({
      logginName: { value: '', disabled: false },
      password: { value: '', disabled: false }
    })
  }

  onSubmit() {
    console.log(this.myform.value);
  }

  signInWithGoogle() {
   this.userData = {};
    this.authService.signInWithGoogle()
      .then((res) => {
        this.userData.userName = res.user.displayName;
        this.userData.userList = [];
        this.router.navigate(['home']);
        localStorage.setItem(`my_currency`, JSON.stringify(this.userData));
      })
      .catch((err) => console.log(err));     
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
      this.userData.userName = res.user.displayName;
      this.userData.userList = [];
      this.router.navigate(['home']);
      localStorage.setItem(`my_currency`, JSON.stringify(this.userData));
    })
    .catch((err) => console.log(err));
  }

  logOut(event) {
    
      this.authService.logout();
     
    }
  
}
