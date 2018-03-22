import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  myform: FormGroup;
  userData: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      logginName: { value: '', disabled: false },
      password: { value: '', disabled: false }
    })
  }

  signInWithGoogle() {
  
    this.authService.signInWithGoogle()

      .then((res) => {

        this.userData = {};
        this.userData.userName = res.user.displayName;
        this.userData.userList = [];

        if (this.authService.getUserData(this.userData)) {
          this.userData = this.authService.getUserData(this.userData);
        } else {this.authService.sentData(this.userData)};

        this.router.navigate(['home']);
        localStorage.setItem(`my_currency`, JSON.stringify(this.userData));
      })
      .catch((err) => console.log(err));
        
  }

  // signInWithFacebook() {
  //   this.authService.signInWithFacebook()
  //   .then((res) => { 
  //     this.userData.userName = res.user.displayName;
  //     this.userData.userList = [];
  //     this.router.navigate(['home']);
  //     localStorage.setItem(`my_currency`, JSON.stringify(this.userData));
  //   })
  //   .catch((err) => console.log(err));
  // }

  logOut(event) {
    
      this.authService.logout();
     
    }
  
}
