import { Component, Input, OnInit } from '@angular/core';
import { Nodule } from 'src/app/models/nodule.model';

@Component({
  selector: 'app-nodule-analysis',
  templateUrl: './nodule-analysis.component.html',
  styleUrls: ['./nodule-analysis.component.scss'],
})
export class NoduleAnalysisComponent implements OnInit {
  @Input()
  nodules: Nodule[];
  @Input()
  optionList: {
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  };

  constructor() {}

  ngOnInit(): void {}
}
