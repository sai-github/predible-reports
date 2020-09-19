import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  public getReport(id: string): Observable<Report> {
    const endPoint =
      'http://my-json-server.typicode.com/sai-github/predible-reports-mock-data/report/';
    return this.http.get<Report>(endPoint + id);
  }
}
