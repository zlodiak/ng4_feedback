import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalVarsService {

	private isAgreeOk = new BehaviorSubject(false);

  constructor() { }

  getAgreeState(): Observable<boolean> {
    console.log('this.isAgreeOk', this.isAgreeOk);
  	return this.isAgreeOk;
  };  

  setAgreeState(state): void {
    console.log('set isAgreeOk', state);
    this.isAgreeOk.next(state);
  };   

}
