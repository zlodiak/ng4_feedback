import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreeComponent } from './agree/agree.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AgreeGuardService } from './services/agree-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    children: [],
    canActivate: [AgreeGuardService, AuthGuardService],
    component: MainComponent
  }, 
  {
    path: 'agree',
    children: [],
    component: AgreeComponent
  },   
  {
    path: 'auth',
    children: [],
    canActivate: [AgreeGuardService],
    component: AuthComponent
  },   
  {
    path: 'feedback',
    children: [],
    canActivate: [AgreeGuardService, AuthGuardService],
    component: FeedbackComponent
  }, 
  {
    path: 'question',
    children: [],
    canActivate: [AgreeGuardService, AuthGuardService],
    component: QuestionComponent
  },     
  {
  	path: '**', 
  	component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
