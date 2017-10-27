import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from '../types/user';

@Injectable()
export class GlobalVarsService {

  private isAgreeOk = new BehaviorSubject(true);
	private isAuthOk = new BehaviorSubject(false);
  private headerTitle_: string = 'Добро пожаловать';
  private authUser_: User;

  constructor() { };

  getAgreeState(): Observable<boolean> {
  	return this.isAgreeOk;
  };  

  setAgreeState(state): void {
    this.isAgreeOk.next(state);    
  }; 

  getAuthState(): Observable<boolean> {
    return this.isAuthOk;
  };  

  setAuthState(state): void {
    this.isAuthOk.next(state);    
  }; 

  get headerTitle() {
    return this.headerTitle_;
  }

  set headerTitle(title) {
    this.headerTitle_ = title;
  } 

  get authUser() {
    return this.authUser_;
  }

  set authUser(userObj) {
    //console.log('authUser', userObj);
    this.authUser_ = userObj;
  }    

}
