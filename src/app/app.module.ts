import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnInit} from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import{MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatGridListModule} from '@angular/material/grid-list';
import{MatExpansionModule} from '@angular/material/expansion'
import{MatCardModule} from '@angular/material/card'
import{MatTabsModule} from '@angular/material/tabs'
import{MatStepperModule} from '@angular/material/stepper'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatAutocompleteModule} from '@angular/material/autocomplete'
import{MatCheckboxModule} from '@angular/material/checkbox'
import{MatRadioModule} from '@angular/material/radio'
import{MatDatepickerModule} from '@angular/material/datepicker'
import{MatTooltipModule} from '@angular/material/tooltip'
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatDialogModule} from '@angular/material/dialog';
import{MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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

  imports: [HttpClientModule,MatIconModule,MatInputModule,FlexLayoutModule,ReactiveFormsModule,
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatButtonModule,
    MatButtonToggleModule,MatBadgeModule,MatProgressSpinnerModule, FormsModule, 
    MatToolbarModule,MatSidenavModule,FormsModule,MatListModule,MatDividerModule,
    MatGridListModule,MatExpansionModule,MatCardModule,MatTabsModule,MatStepperModule,
    MatInputModule,MatFormFieldModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule
    ,MatRadioModule,MatDatepickerModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,
    MatTableModule,MatPaginatorModule,MatMenuModule,MatProgressBarModule,MatSliderModule,MatSlideToggleModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
