import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private globalVarsService: GlobalVarsService,
  						private router: Router) { }

  ngOnInit() {
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
