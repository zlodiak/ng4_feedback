import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router,
  						private globalVarsService: GlobalVarsService) { };

  canActivate() {
    let auth = this.globalVarsService.authUser;

    if(!auth.login.length || auth.login === undefined) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  } 

}
