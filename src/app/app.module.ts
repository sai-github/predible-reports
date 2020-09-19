import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * angular/angular
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ReportAnalysisComponent } from './components/report-analysis/report-analysis.component';
import { NoduleAnalysisComponent } from './components/nodule-analysis/nodule-analysis.component';
import { NoduleSnippetComponent } from './components/nodule-snippet/nodule-snippet.component';
import { FleischnerRiskComponent } from './components/fleischner-risk/fleischner-risk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LungReportComponent,
    FooterComponent,
    ReportDetailsComponent,
    ReportAnalysisComponent,
    NoduleAnalysisComponent,
    NoduleSnippetComponent,
    FleischnerRiskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
