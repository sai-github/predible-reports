import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  comingSoon() {
    this._snackBar.open('Coming Soon, keep watching!', '👀', {
      duration: 2000,
    });
  }
}
