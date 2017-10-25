import { Injectable } from '@angular/core';

import { Question } from '../types/question';

@Injectable()
export class QuestionsService {

	private questions: Question[];

  constructor() { 
  	this.questions = localStorage.questions ? JSON.parse(localStorage.questions) : [];
  }

  getQuestions() {
  	console.log('qqq');
  	return this.questions;
  };  

  setQuestions(question): void {
    this.questions.push(question);
    localStorage.questions = JSON.stringify(this.questions);
  };    

}
