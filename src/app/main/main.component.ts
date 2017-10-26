import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private globalVarsService: GlobalVarsService) { }

  ngOnInit() {
  	this.globalVarsService.headerTitle = 'Начало';
  }

}
