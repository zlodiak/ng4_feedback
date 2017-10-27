import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	private fname: string = '';
	private lname: string = '';

  constructor(private globalVarsService: GlobalVarsService) { }

  ngOnInit() {
  	this.globalVarsService.headerTitle = 'Начало';
  	this.fname = this.globalVarsService.authUser.fname;
  	this.lname = this.globalVarsService.authUser.lname;
  }

}
