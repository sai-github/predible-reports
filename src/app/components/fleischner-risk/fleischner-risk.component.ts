import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-fleischner-risk',
  templateUrl: './fleischner-risk.component.html',
  styleUrls: ['./fleischner-risk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleischnerRiskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
