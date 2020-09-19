import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportsService } from 'src/app/services/reports.service';
@Component({
  selector: 'app-lung-report',
  templateUrl: './lung-report.component.html',
  styleUrls: ['./lung-report.component.scss'],
})
export class LungReportComponent implements OnInit {
  report: Report;
  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reportsService
      .getReport('1')
      .subscribe((res) => (this.report = res));
  }
}
