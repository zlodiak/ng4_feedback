import { Component, OnInit } from '@angular/core';

import { SpeakersService } from '../services/speakers.service';
import { QuestionsService } from '../services/questions.service';
import { Speaker } from '../types/speaker';
import { Question } from '../types/question';


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
              private questionsService: QuestionsService) { }

  ngOnInit() {
  	this.getSpeakers();     
    this.getQuestions();
    console.log(this.questions);
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
    if(!this.selectedSpeakerId || !this.questionText.trim()) {
      let message = [];
      message[0] = !this.selectedSpeakerId ? 'Выберите спикера. ' : '';
      message[1] = !this.questionText.trim() ? 'Введите текст вопроса' : '';

      message = message[0] + message[1];
      alert(message);
      return;
    }

    this.questionsService.setQuestions({
      "text": "42256yregd",
      "speakerId": 23,
      "dateHuman": "223 oct",
      "dateUnix": "22222"
    });

    alert('ok');
  };

  private getQuestions(): void {
    this.questionsService.getQuestions().map(question => {
      this.questions.push(question);
     });   
  };   

}
