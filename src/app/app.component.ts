import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';

import { Router } from '@angular/router';

import { GlobalVarsService } from './services/global-vars.service';
import { Config } from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private isAuthOk: boolean;
	private isAgreeOk: boolean;
	private headerTitle: string;
	private author: string;
	private createdDate: string;
	private isAdmin: boolean = false;

	constructor(private globalVarsService: GlobalVarsService,
							private router: Router) 
	{ 
		this.author = Config.author;
		this.createdDate = Config.createdDate;		
	}; 	

	ngOnInit() {
		this.headerTitle = this.globalVarsService.headerTitle;

	};

	ngAfterViewInit() {
		this.headerTitle = this.globalVarsService.headerTitle;
	};

	ngDoCheck() {
		this.isAdmin = this.globalVarsService.authUser.isAdmin;	
		this.isAuthOk = this.globalVarsService.authUser.login.length ? true : false;	
	};

	private closeSidenav(sidenav) {		
		sidenav.close();
	};	

	private sidenavOpen(sidenav) {
		let isAuthUser = this.globalVarsService.authUser;
		if(isAuthUser) {
			sidenav.open();
		}
	};

	private logout() {
		this.globalVarsService.authUser = {
			isAdmin: false,
			login: '',
			password: '',
			fname: '',
			lname: ''			
		};
		this.router.navigate(['/auth']);
	}

}
