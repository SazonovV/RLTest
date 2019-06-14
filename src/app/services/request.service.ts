import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private firstButtonUrl = 'api/firstButton';
  private secondButtonUrl = 'api/secondButton';

  constructor(private http: HttpClient) { }

  public firstRequest(): Observable<string> {
    return this.http.get<string>(this.firstButtonUrl);
  }
  public secondRequest(): Observable<string> {
    return this.http.get<string>(this.secondButtonUrl);
  }
}
