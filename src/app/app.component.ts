import { Component, OnInit, AfterViewInit } from '@angular/core';

import { GlobalVarsService } from './services/global-vars.service';
import { Config } from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

	private isAgreeOk: boolean;
	private headerTitle: string;
	private author: string;
	private createdDate: string;

	constructor(private globalVarsService: GlobalVarsService) { 
		this.author = Config.author;
		this.createdDate = Config.createdDate;
	}; 	

	private closeSidenav(sidenav) {		
		sidenav.close();
		//this.headerTitle = this.globalVarsService.headerTitle;
	};

	ngOnInit() {
		this.headerTitle = this.globalVarsService.headerTitle;
	};

	ngAfterViewInit() {
		this.headerTitle = this.globalVarsService.headerTitle;
	}

}
