import { Component } from '@angular/core';

import { GlobalVarsService } from './services/global-vars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private isAgreeOk: boolean;

	constructor(private globalVarsService: GlobalVarsService) { }; 	


}
