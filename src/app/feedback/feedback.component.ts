import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { GlobalVarsService } from '../services/global-vars.service';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackQuestion } from '../types/feedback-question';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

	private questions: FeedbackQuestion[] = [];
  private answer: Object = {};
	private answers: Object = {};
  private isVisibleForm: boolean = true;

  constructor(private globalVarsService: GlobalVarsService,
  						private feedbackService: FeedbackService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.getQuestions();
  	this.checkVote();
  	this.globalVarsService.headerTitle = 'Отправить отзыв';
  };

  private checkVote(): void {
    let answersObj: Object = localStorage.answers ? JSON.parse(localStorage.answers) : {};
    let currUserLogin = this.globalVarsService.authUser.login;
    console.log(answersObj, currUserLogin, answersObj[currUserLogin] ? 1: 0);
    if(currUserLogin in answersObj) {
      this.isVisibleForm = false;
    }
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

  private sendAnswers(): void {
  	//console.log(this.answer);
    let answersCnt = Object.keys(this.answer);

    if(!answersCnt.length) {
      this.matDialog.open(InfoDialogComponent, {
        width: '300px',
        hasBackdrop: true,
        data: { title: 'Ошибка!', message: 'Необходимо сделать выбор.' }
      });        
      return;
    }

    answersCnt.forEach((key) => {
      console.log(key, this.answer[key]);
      this.answers[key] = this.answer[key];
    });

    //console.log(this.answers);

    this.feedbackService.setAnswers(this.answers, this.globalVarsService.authUser.login);
    
    this.answer = {};
    this.isVisibleForm = false;

    this.matDialog.open(InfoDialogComponent, {
      width: '300px',
      hasBackdrop: true,
      data: { title: 'Спасибо!', message: 'Ваш отзыв отправлен.' }
    });    
  };

}
