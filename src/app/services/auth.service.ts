import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  constructor(private http: Http) { };

  getUsers(): Observable<any> {
  	return this.http.get('../assets/json/users.json');
  };

}
