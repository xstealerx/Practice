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
import { PanelComponent } from './panel/panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice,
    SummaryPipe,
    StarComponent,
    TitlePracticeComponent,
    TitleCasePipe,
    PanelComponent,
    LikeButtonComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
