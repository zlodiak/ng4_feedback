import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreeComponent } from './agree/agree.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    children: [],
    component: MainComponent
  }, 
  {
    path: 'agree',
    children: [],
    component: AgreeComponent
  },   
  {
    path: 'feedback',
    children: [],
    component: FeedbackComponent
  }, 
  {
    path: 'question',
    children: [],
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
