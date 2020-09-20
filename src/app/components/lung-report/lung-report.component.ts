import { Component, OnDestroy, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportsService } from 'src/app/services/reports.service';
import { UtilsService } from 'src/app/services/utils.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lung-report',
  templateUrl: './lung-report.component.html',
  styleUrls: ['./lung-report.component.scss'],
})
export class LungReportComponent implements OnInit, OnDestroy {
  reportID: string;
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
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.reportID = this.route.snapshot.paramMap.get('id');

    this.appBusy = false;

    if (this.reportID) {
      this.temp1 = this.reportsService
        .getReport(this.reportID)
        .subscribe((res) => {
          this.report = res;
        });

      this.temp2 = this.utilsService
        .getCommonListOfNodulesAnalysis()
        .subscribe((res) => (this.optionsList = res));
    }
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
    if (this.temp1) {
      this.temp1.unsubscribe();
    }
    if (this.temp2) {
      this.temp2.unsubscribe();
    }
    if (this.temp3) {
      this.temp3.unsubscribe();
    }
  }
}
