import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PredictResult, Input} from './result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchGsatDataService {
  result: PredictResult;
  constructor(private http: HttpClient) { }

  getPredictResult(input: Input): Observable<PredictResult> {
    const addr = 'https://predict.chu.edu.tw/2021/gsat/api/gsat/analysis';
    const headers = new HttpHeaders({
      contentType: 'application/json'
    });
    const option = {
      headers,
      observe: 'response' as 'response',
    };
    return this.http.post<PredictResult>(addr,input);
  }

}
