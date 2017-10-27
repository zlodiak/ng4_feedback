import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

import { GlobalVarsService } from '../services/global-vars.service';


@Injectable()
export class AdminGuardService {

  constructor(private router: Router,
  						private globalVarsService: GlobalVarsService) { };

  canActivate() {
    let auth = this.globalVarsService.authUser;

    if(!auth.isAdmin) {
      this.router.navigate(['/main']);
      return false;
    } else {
      return true;
    }
  } 

}
