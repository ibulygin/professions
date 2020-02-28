import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url)
        .pipe(
            catchError(err => {  
                console.log("упс..."); 
                return throwError(err);
        }))
  }

  post(url: string, req: Object): Observable<any> {
    return this.http.post(url, req)
      .pipe(
        catchError(err => {  
            console.log("упс..."); 
            return throwError(err);
    }));
  }

  delete(url: string): Observable<any> { 
    return this.http.delete(url)
    .pipe(
      catchError(err => {  
          console.log("упс..."); 
          return throwError(err);
  }));
  }
}
