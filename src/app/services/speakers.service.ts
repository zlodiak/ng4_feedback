import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';


@Injectable()
export class SpeakersService {

  constructor(private http: Http) { };

  getSpeakers(): Observable<any> {
  	let result = this.http.get(Config.host + 'assets/json/speakers.json');
  	return result;
  };    

}
