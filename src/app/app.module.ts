import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  MatButtonModule, 
          MatSidenavModule,
          MatGridListModule,
          MatCheckboxModule,
          MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgreeComponent } from './agree/agree.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { GlobalVarsService } from './services/global-vars.service';
import { SpeakersService } from './services/speakers.service';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AgreeComponent,
    FeedbackComponent,
    QuestionComponent,
    PageNotFoundComponent,
    MainComponent,
    InfoDialogComponent
  ],
  imports: [   
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
    GlobalVarsService,
    SpeakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
