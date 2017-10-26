import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private globalVarsService: GlobalVarsService) { }

  ngOnInit() {
  	this.globalVarsService.headerTitle = 'Отправить отзыв';
  };

}
