import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * angular/angular
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * material/theme
 */
import { MaterialModule } from './material/material.module';

/**
 * Quill Editor
 */

import { QuillModule } from 'ngx-quill';

/**
 * predible/components
 */
import { HeaderComponent } from './components/header/header.component';
import { LungReportComponent } from './components/lung-report/lung-report.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LungReportComponent,
    FooterComponent,
    ReportDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
