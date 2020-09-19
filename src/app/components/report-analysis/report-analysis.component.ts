import { Component, Input, OnInit } from '@angular/core';
import { Analysis } from 'src/app/models/analysis.model';

@Component({
  selector: 'app-report-analysis',
  templateUrl: './report-analysis.component.html',
  styleUrls: ['./report-analysis.component.scss'],
})
export class ReportAnalysisComponent implements OnInit {
  @Input()
  analysis: Analysis;
  @Input()
  optionsList: {
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  };
  constructor() {}

  ngOnInit(): void {}
}
