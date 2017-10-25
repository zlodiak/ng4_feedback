import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';
import { SpeakersService } from '../services/speakers.service';
import { Speaker } from '../types/speaker';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  private speakers: Speaker[] = [];
  private selectedSpeakerId: number = undefined;
  private questionText: string = '';

  constructor(private speakersService: SpeakersService,
              private globalVarsService: GlobalVarsService,
  						private router: Router) { }

  ngOnInit() {
    this.checkAgreeState();
  	this.getSpeakers();     
  }

  private checkAgreeState() {
		this.globalVarsService.getAgreeState().subscribe(state => setTimeout(() => {
		  console.log('subscribe', state);
		  if(!state) {
				this.router.navigate(['/agree']);
		  }
		})); 
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

        console.log(speakers); 
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

    alert('ok');
  };

}
