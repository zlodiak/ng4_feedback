import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackQuestion } from '../types/feedback-question';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

	private questions: FeedbackQuestion[] = [];
	private answers: Object = {};

  constructor(private globalVarsService: GlobalVarsService,
  						private feedbackService: FeedbackService) { }

  ngOnInit() {
  	this.getQuestions();
  	this.globalVarsService.headerTitle = 'Отправить отзыв';
  };

  private getQuestions(): void {
    this.feedbackService.getQuestions().subscribe(
      data => {   
        //console.log(data);  
        let questionsRaw = JSON.parse(data._body)['values'];
        let questions: FeedbackQuestion[] = [];

        for(var prop in questionsRaw) {
          if (!questionsRaw.hasOwnProperty(prop)) continue;
          questionsRaw[prop].id = prop;
          questionsRaw[prop].order = +questionsRaw[prop].order;
          questionsRaw[prop].answers_type = +questionsRaw[prop].answers_type;
          questionsRaw[prop].mandatory = +questionsRaw[prop].mandatory;
          questions.push(questionsRaw[prop]);
        }
      
        this.questions = questions;                                                                                                                           
        console.log(this.questions); 
      }, 
      err => {
        console.log('err')         
      });    
  };   

}
