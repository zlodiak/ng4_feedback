import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../services/feedback.service';
import { Answer } from '../types/answer';
import { User } from '../types/user';
import { AuthService } from '../services/auth.service';
import { FeedbackQuestion } from '../types/feedback-question';


@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.scss']
})
export class AdminFeedbackComponent implements OnInit {

	private answers: Object = {};
	private answersKeys = [];
	private users = {};
	private questions: FeedbackQuestion[] = [];

  constructor(private feedbackService: FeedbackService,
  						private authService: AuthService) { }

  ngOnInit() {
  	this.getAnswers();
  	this.getUsers();
  	this.getQuestions();
  };

  private getUsers() {
    this.authService.getUsers().subscribe(
    data => {   
      //console.log(data);  
      let usersRaw = JSON.parse(data._body);
      let users: any[] = [];

      for(var prop in usersRaw) {
        if (!usersRaw.hasOwnProperty(prop)) continue;
        users[usersRaw[prop].login] = usersRaw[prop];
      }
      
      this.users = users;          
      //console.log(typeof this.users, this.users);                                                                                                                  
    }, 
    err => {
      console.log('err')         
    });   	
  };

  private getAnswers() {
    this.answers = this.feedbackService.getAnswers();
    this.answersKeys = Object.keys(this.answers);
    //console.log(this.answers, this.answersKeys);
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
        //console.log(this.questions); 
      }, 
      err => {
        console.log('err')         
      });    
  };    

  private getKeys(obj) {
  	return Object.keys(obj);
  };

}
