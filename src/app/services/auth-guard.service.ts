import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router,
  						private globalVarsService: GlobalVarsService) { };

  canActivate() {
    this.globalVarsService.getAuthState().subscribe(
    state => {
      if(!state) {
		    this.router.navigate(['/auth']);
		    return false;
      } else {
      	return true;
      }            
    }); 

    return true;
  } 

}
