import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';


@Injectable()
export class FeedbackService {

	private answers: Object;

  constructor(private http: Http) { 
  	this.answers = localStorage.answers ? JSON.parse(localStorage.answers) : {};
  }

  getAnswers() {
  	return this.answers;
  };  

  setAnswers(answer, userLogin): void {    
    this.answers[''+userLogin] = answer;
    //console.log('setanswers', answer, userLogin, this.answers);
    localStorage.answers = JSON.stringify(this.answers);
  }; 

  getQuestions(): Observable<any> {
  	return this.http.get(Config.host + 'assets/json/feedback.json');
  };  

}
