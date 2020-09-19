import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-fleischner-risk',
  templateUrl: './fleischner-risk.component.html',
  styleUrls: ['./fleischner-risk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleischnerRiskComponent implements OnInit {
  @Input()
  risk: boolean;
  constructor() {}

  ngOnInit(): void {}
}
