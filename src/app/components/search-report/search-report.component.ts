import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
  styleUrls: ['./search-report.component.scss'],
})
export class SearchReportComponent implements OnInit {
  today: Date;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.today = new Date();
  }

  onSearch(value: string) {
    this.router.navigate(['lung-report', { id: value }]);
  }
}
