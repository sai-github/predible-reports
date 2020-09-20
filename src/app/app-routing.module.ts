import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LungReportComponent } from './components/lung-report/lung-report.component';
import { SearchReportComponent } from './components/search-report/search-report.component';

const routes: Routes = [
  { path: 'lung-report', component: LungReportComponent },
  { path: 'search', component: SearchReportComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
