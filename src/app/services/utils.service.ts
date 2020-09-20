import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private http: HttpClient) {}

  public getCommonListOfNodulesAnalysis(): Observable<{
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  }> {
    const endPoint = environment.backend + 'analysisInfo';
    return this.http
      .get<any>(endPoint)
      .pipe(map((res) => res.nodule));
  }

  public dummyApprove(): Observable<string> {
    return of('Dummy Report, Approved!').pipe(delay(3000));
  }
}
