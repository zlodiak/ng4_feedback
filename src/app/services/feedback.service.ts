import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  constructor(private http: Http) { };

  getQuestions(): Observable<any> {
  	return this.http.get('../assets/json/feedback.json');
  };  

}
