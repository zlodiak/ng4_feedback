import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.scss']
})
export class AgreeComponent implements OnInit {

	private isAgreeOk: boolean;

  constructor(private globalVarsService: GlobalVarsService,
  						private router: Router) { }

  ngOnInit() {
  	this.getAgreeState();
    this.globalVarsService.headerTitle = 'Добро пожаловать';
  }

  private getAgreeState() {
		this.globalVarsService.getAgreeState().subscribe(data => setTimeout(() => {
		  //console.log('subscribe', data);
		  this.isAgreeOk = data;
		}, 0)); 
  };

  private setAgreeState() {
  	if(this.isAgreeOk) {
  		this.globalVarsService.setAgreeState(true);
  		this.router.navigate(['/main']); 		
  	}
  };
}
