import { Component, OnDestroy, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportsService } from 'src/app/services/reports.service';
import { UtilsService } from 'src/app/services/utils.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lung-report',
  templateUrl: './lung-report.component.html',
  styleUrls: ['./lung-report.component.scss'],
})
export class LungReportComponent implements OnInit, OnDestroy {
  report: Report;
  optionsList: {
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  };

  appBusy: boolean;

  /**Subscriptions */
  temp1: Subscription;
  temp2: Subscription;
  temp3: Subscription;

  constructor(
    private reportsService: ReportsService,
    private utilsService: UtilsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.appBusy = false;

    this.temp1 = this.reportsService
      .getReport('1')
      .subscribe((res) => (this.report = res));

    this.temp2 = this.utilsService
      .getCommonListOfNodulesAnalysis()
      .subscribe((res) => (this.optionsList = res));
  }

  onApproveReport() {
    this.appBusy = true;
    this.temp3 = this.utilsService.dummyApprove().subscribe((res) => {
      this.appBusy = false;
      this._snackBar.open(res, 'OK', {
        duration: 2000,
      });
    });
  }

  onDownloadReport() {
    this._snackBar.open('Coming Soon, keep watching!', '👀', {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.temp1.unsubscribe();
    this.temp2.unsubscribe();
    this.temp3.unsubscribe();
  }
}
