import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from '../types/user';

@Injectable()
export class GlobalVarsService {

  private isAgreeOk = false;
  private headerTitle_: string = 'Добро пожаловать';
  private authUser_: User = {
    isAdmin: false,
    login: '',
    password: '',
    fname: '',
    lname: ''      
  };  
  /*private authUser_: User = {
    isAdmin: true,
    login: '1',
    password: '1',
    fname: 'Ivan',
    lname: 'Ivanov'      
  };*/

  constructor() { };

  get headerTitle() {
    return this.headerTitle_;
  };
  set headerTitle(title) {
    this.headerTitle_ = title;
  };


  get authUser() {
    return this.authUser_;
  };
  set authUser(userObj) {
    this.authUser_ = userObj;
  };


  get agreeState() {
    return this.isAgreeOk;
  };
  set agreeState(state) {
    this.isAgreeOk = state;
  };      

}
