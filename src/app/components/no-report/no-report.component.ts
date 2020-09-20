import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-no-report',
  templateUrl: './no-report.component.html',
  styleUrls: ['./no-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
