import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.scss']
})
export class AgreeComponent implements OnInit {

	private isAgreeOk: boolean;

  constructor(private globalVarsService: GlobalVarsService) { }

  ngOnInit() {
  	this.getAgreeState();
  }

  private getAgreeState() {
		this.globalVarsService.getAgreeState().subscribe(data => setTimeout(() => {
		  console.log('subscribe', data);
		  this.isAgreeOk = data;
		}, 0)); 
  };

  private checkAgreeState() {
  	if(this.isAgreeOk) {
  		this.globalVarsService.setAgreeState(true);
  	}
  };

}
