import { Component, OnInit } from '@angular/core';

import { Question } from '../types/question';
import { Speaker } from '../types/speaker';
import { QuestionsService } from '../services/questions.service';
import { SpeakersService } from '../services/speakers.service';
import { DateService } from '../services/date.service';


@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.scss']
})
export class AdminQuestionComponent implements OnInit {

	private questions: Question[] = [];
	private speakers: Speaker[] = [];

  constructor(private questionsService: QuestionsService,
  						private speakersService: SpeakersService,
  						private dateService: DateService) { }

  ngOnInit() {
  	this.getQuestions();
  	this.getSpeakers();
  }

  private getQuestions() {
  	this.questions = this.questionsService.getQuestions();
  	this.questions.forEach(question => {
  		question.dateHuman = this.dateService.fromUnixToHuman(question.dateUnix);
  	});
  	//console.log(this.questions);
  };

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

}
