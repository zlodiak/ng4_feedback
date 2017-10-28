import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { User } from '../types/user';
import { GlobalVarsService } from '../services/global-vars.service';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	private users: User[] = [];
	private login: string = '';
	private password: string = '';

  constructor(private authService: AuthService,
  						private globalVarsService: GlobalVarsService,
  						private router: Router,
              private matDialog: MatDialog) { };

  ngOnInit() {
  	this.getUsers();
    this.globalVarsService.headerTitle = 'Авторизация';
  }

  private getUsers(): void {
    this.authService.getUsers().subscribe(
    data => {   
      //console.log(data);  
      let usersRaw = JSON.parse(data._body);
      let users: any[] = [];

      for(var prop in usersRaw) {
        if (!usersRaw.hasOwnProperty(prop)) continue;
        users.push(usersRaw[prop]);
      }
      
      this.users = users;          
      //console.log(typeof this.users, this.users);                                                                                                                  
    }, 
    err => {
      console.log('err')         
    });    
  };  

  private authUser(): void {
  	if(!this.login.trim().length || !this.password.trim().length) { 
      this.matDialog.open(InfoDialogComponent, {
        width: '300px',
        hasBackdrop: true,
        data: { title: 'Ошибка!', message: 'Заполните поля.' }
      });        
  		return;
  	};

    for(var prop in this.users) {
      if (!this.users.hasOwnProperty(prop)) continue;
      if(this.users[prop].login == this.login.trim() && this.users[prop].password == this.password.trim()) {
	  		this.globalVarsService.authUser = this.users[prop];
	  		this.router.navigate(['/main']); 
        return;
      } 
    }

    this.matDialog.open(InfoDialogComponent, {
      width: '300px',
      hasBackdrop: true,
      data: { title: 'Ошибка авторизации!', message: 'Нет такого пользователя.' }
    });    
  }; 

}
