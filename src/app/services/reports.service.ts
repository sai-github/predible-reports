import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  public getReport(id: string) {
    const endPoint =
      'http://my-json-server.typicode.com/sai-github/predible-reports-mock-data/report/';
    return this.http.get(endPoint + id);
  }
}
