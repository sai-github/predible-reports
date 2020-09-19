import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportsService } from 'src/app/services/reports.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-lung-report',
  templateUrl: './lung-report.component.html',
  styleUrls: ['./lung-report.component.scss'],
})
export class LungReportComponent implements OnInit {
  report: Report;
  optionsList: {
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  };
  constructor(
    private reportsService: ReportsService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.reportsService
      .getReport('1')
      .subscribe((res) => (this.report = res));

    this.utilsService
      .getCommonListOfNodulesAnalysis()
      .subscribe((res) => (this.optionsList = res));
  }
}
