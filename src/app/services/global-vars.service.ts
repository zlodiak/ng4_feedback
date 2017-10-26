import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalVarsService {

  private isAgreeOk = new BehaviorSubject(false);
	private isAuthOk = new BehaviorSubject(false);

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

}
