import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
@Component({
  selector: 'app-lung-report',
  templateUrl: './lung-report.component.html',
  styleUrls: ['./lung-report.component.scss'],
})
export class LungReportComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reportsService
      .getReport('1')
      .subscribe((res) => console.log(res));
  }
}
