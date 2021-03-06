import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Report } from '../models/report.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  public getReport(id: string): Observable<Report> {
    const endPoint = environment.backend + 'report/';
    return this.http.get<Report>(endPoint + id).pipe(
      map((res) => res),
      catchError((err) => {
        this._snackBar.open('No Report Found', '👀', {
          duration: 2000,
        });
        return throwError(err);
      })
    );
  }
}
