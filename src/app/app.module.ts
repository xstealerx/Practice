import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Practice} from './practice.component';
import { StarComponent } from './star/star.component';
import { bootstrap } from 'ngx-bootstrap-icons';
import { TitlePracticeComponent } from './title-practice/title-practice.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Practice,
    SummaryPipe,
    StarComponent,
    TitlePracticeComponent,
    TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, StarComponent, Practice],

  
})
export class AppModule { }
