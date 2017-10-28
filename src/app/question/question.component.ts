import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { SpeakersService } from '../services/speakers.service';
import { QuestionsService } from '../services/questions.service';
import { Speaker } from '../types/speaker';
import { Question } from '../types/question';
import { DateService } from '../services/date.service';
import { GlobalVarsService } from '../services/global-vars.service';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  private speakers: Speaker[] = [];
  private selectedSpeakerId: number = undefined;
  private questionText: string = '';
  private questions: Question[] = [];

  constructor(private speakersService: SpeakersService,
              private questionsService: QuestionsService,
              private dateService: DateService,
              private globalVarsService: GlobalVarsService,
              private matDialog: MatDialog) { }

  ngOnInit() {
  	this.getSpeakers();     
    this.getQuestions();
    this.globalVarsService.headerTitle = 'Задать вопрос';
  }

  private getSpeakers(): void {
    this.speakersService.getSpeakers().subscribe(
      data => {   
        //console.log(data);  
        let speakersRaw = JSON.parse(data._body);
        let speakers: any[] = [];

        for(var prop in speakersRaw) {
          if (!speakersRaw.hasOwnProperty(prop)) continue;
          speakers.push(speakersRaw[prop]);
        }

        //console.log(speakers); 
        this.speakers = speakers;                                                                                                                           
      }, 
      err => {
        console.log('err')         
      });    
  };   

  private sendQuestion(): void {   
    if(this.selectedSpeakerId === undefined || !this.questionText.trim()) {
      let message = [];

      message[0] = !this.selectedSpeakerId ? 'Выберите спикера. ' : '';
      message[1] = !this.questionText.trim() ? 'Введите текст вопроса' : '';

      message = message[0] + message[1];

      this.matDialog.open(InfoDialogComponent, {
        width: '300px',
        hasBackdrop: true,
        data: { title: 'Ошибка!', message: message }
      });

      return;
    }

    this.questionsService.setQuestions({
      "text": this.questionText,
      "speakerId": this.selectedSpeakerId,
      "dateHuman": this.dateService.getNowDate()['dateHuman'],
      "dateUnix": this.dateService.getNowDate()['unixTimeStamp']
    });

    this.selectedSpeakerId = undefined;
    this.questionText = undefined;

    this.matDialog.open(InfoDialogComponent, {
      width: '300px',
      hasBackdrop: true,
      data: { title: 'Спасибо!', message: 'Ваш вопрос отправлен.' }
    });
  };

  private getQuestions(): void {
    this.questionsService.getQuestions().map(question => {
      this.questions.push(question);
     });   
  };   

}
