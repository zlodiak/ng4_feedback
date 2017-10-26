import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


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
  	return this.http.get('../assets/json/feedback.json');
  };  

}
