import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';


@Injectable()
export class AgreeGuardService implements CanActivate {

  constructor(private router: Router,
  						private globalVarsService: GlobalVarsService) { };

  canActivate() {
    /*this.globalVarsService.getAgreeState().subscribe(
    state => {
      if(!state) {
		    this.router.navigate(['/agree']);
		    return false;
      } else {
      	return true;
      }      
      
    }); */

    return true;
  }  

}




