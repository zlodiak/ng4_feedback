import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';


@Injectable()
export class AgreeGuardService implements CanActivate {

  constructor(private router: Router,
  						private globalVarsService: GlobalVarsService) { };

  canActivate() {
    let agree = this.globalVarsService.agreeState;

    if(!agree) {
      this.router.navigate(['/agree']);
      return false;
    } else {
      return true;
    }
  }  

}




