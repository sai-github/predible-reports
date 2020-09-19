import { Component, Input, OnInit } from '@angular/core';
import { Nodule } from 'src/app/models/nodule.model';

@Component({
  selector: 'app-nodule-snippet',
  templateUrl: './nodule-snippet.component.html',
  styleUrls: ['./nodule-snippet.component.scss'],
})
export class NoduleSnippetComponent implements OnInit {
  @Input()
  nodule: Nodule;
  @Input()
  lobeList: string[];
  @Input()
  typeList: string[];
  @Input()
  borderList: string[];
  constructor() {}

  ngOnInit(): void {}
}
