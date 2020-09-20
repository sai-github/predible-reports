import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
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

  public dummyApprove(): Observable<{
    status: string;
    completion: number;
  }> {
    const response = [
      { status: 'loading', completion: 0 },
      { status: 'loading', completion: 25 },
      { status: 'loading', completion: 50 },
      { status: 'loading', completion: 75 },
      { status: 'Dummy Report, Approved!', completion: 100 },
    ];
    return interval(500).pipe(
      take(response.length),
      map((index) => response[index])
    );
  }
}
