import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatButtonModule, 
          MatSidenavModule,
          MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgreeComponent } from './agree/agree.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AgreeComponent,
    FeedbackComponent,
    QuestionComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [   
    MatGridListModule,
    MatSidenavModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
