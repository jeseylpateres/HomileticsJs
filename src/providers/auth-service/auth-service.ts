import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  //function authService($firebaseAuth, firebaseDataService, homileticsService) {
  //    var firebaseAuthObject = $firebaseAuth();
  //
  //    var service = {
  //       firebaseAuthObject: firebaseAuthObject,
  //       register: register,
  //       login: login,
  //       logout: logout,
  //       isLoggedIn: isLoggedIn,
  //       sendWelcomeEmail: sendWelcomeEmail
  //    };
  //
  //    return service;
  //
  //    ////////////
  //
  //    function register(user) {
  //       return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
  //    }
  //
  //    function login(user) {
  //       return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
  //    }
  //
  //    function logout() {
  //       homileticsService.reset();
  //       firebaseAuthObject.$signOut();
  //    }
  //
  //    function isLoggedIn() {
  //       return firebaseAuthObject.$getAuth();
  //    }
  //}

}
