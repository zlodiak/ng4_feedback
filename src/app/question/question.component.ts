import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private globalVarsService: GlobalVarsService,
  						private router: Router) { }

  ngOnInit() {
  	this.checkAgreeState();
  }

  private checkAgreeState() {
		this.globalVarsService.getAgreeState().subscribe(state => setTimeout(() => {
		  console.log('subscribe', state);
		  if(!state) {
				this.router.navigate(['/agree']);
		  }
		})); 
  };

}
