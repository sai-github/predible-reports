import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details.model';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  @Input() details: Details;

  constructor() {}

  ngOnInit(): void {}
}
