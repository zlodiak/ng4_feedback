import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import {  MatButtonModule, 
          MatSidenavModule,
          MatGridListModule,
          MatCheckboxModule,
          MatSelectModule,
          MatCardModule,
          MatRadioModule,
          MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AgreeComponent } from './agree/agree.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminQuestionComponent } from './admin-question/admin-question.component';

import { GlobalVarsService } from './services/global-vars.service';
import { SpeakersService } from './services/speakers.service';
import { AgreeGuardService } from './services/agree-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { QuestionsService } from './services/questions.service';
import { DateService } from './services/date.service';
import { AuthService } from './services/auth.service';
import { FeedbackService } from './services/feedback.service';


@NgModule({
  declarations: [
    AppComponent,
    AgreeComponent,
    FeedbackComponent,
    QuestionComponent,
    PageNotFoundComponent,
    MainComponent,
    AuthComponent,
    AdminFeedbackComponent,
    AdminQuestionComponent
  ],
  imports: [   
    MatExpansionModule,
    MatRadioModule,
    OrderModule,
    MatCardModule,
    MatSelectModule,
    HttpModule,
    FormsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FeedbackService,
    AuthGuardService,
    AuthService,
    DateService,
    QuestionsService,
    AgreeGuardService,
    GlobalVarsService,
    SpeakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
