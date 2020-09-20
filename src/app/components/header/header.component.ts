import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  navigate(value: string) {
    this.router.navigate(['lung-report', { id: value }]);
  }
  comingSoon() {
    this._snackBar.open('Coming Soon, keep watching!', '👀', {
      duration: 2000,
    });
  }
}
