import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
