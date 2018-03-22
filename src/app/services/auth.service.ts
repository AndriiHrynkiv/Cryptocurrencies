import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthService {
  private user: Observable<firebase.User>;
  private userData: firebase.User = null;
  private itemsCollection: any;
  private itemsDoc: any;
  private item: Observable<any[]>;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<any>('users');
    this.item = this.itemsCollection.valueChanges();


    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userData = user;
          console.log(this.userData);
        }
        else {
          this.userData = null;
        }
      }
    )
  }

  sentData(item: any) {
    this.itemsCollection.doc(item.userName).set(item);
  }
  getUserData(currentUserData) {
    this.itemsCollection.doc(currentUserData.userName).valueChanges()
    .subscribe(res => {return res})
  }
  updateUserData (item) {
    this.itemsCollection.doc(item.userName).set(item);
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  isLoggedIn() {
    if (this.userData == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['loggin']));
  }

  // signInWithTwitter() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.TwitterAuthProvider()
  //   )
  // }
  // signInWithFacebook() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.FacebookAuthProvider()
  //   )
  // }
}