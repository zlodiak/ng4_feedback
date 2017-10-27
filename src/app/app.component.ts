import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

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

	constructor(private globalVarsService: GlobalVarsService,
							private router: Router) 
	{ 
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


	private sidenavOpen(sidenav) {
		let isAuthUser = this.globalVarsService.authUser;
		if(isAuthUser) {
			sidenav.open();
		} else {
			alert('Чтобы получить доступ к меню нужно авторизоваться');
		}
	};

	private logout() {
		console.log('lo');
		this.globalVarsService.authUser = {
			login: '',
			password: '',
			fname: '',
			lname: ''			
		};
		this.router.navigate(['/auth']);
	}

}
