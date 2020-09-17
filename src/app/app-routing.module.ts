import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LungReportComponent } from './components/lung-report/lung-report.component';

const routes: Routes = [
  { path: 'lung-report', component: LungReportComponent },
  { path: '', component: LungReportComponent },
  { path: '**', component: LungReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
