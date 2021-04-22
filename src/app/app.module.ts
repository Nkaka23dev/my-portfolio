import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnInit} from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import{MatListModule} from '@angular/material/list'
import'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import{FlexLayoutModule} from '@angular/flex-layout';
import { BioComponent } from './components/bio/bio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    SkillsComponent,
    WorkComponent,
    ResumeComponent,
  ],

  imports: [HttpClientModule,FlexLayoutModule,ReactiveFormsModule,
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,
    FormsModule, 
    FormsModule,MatListModule,
   
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
