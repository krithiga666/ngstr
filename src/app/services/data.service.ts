import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { SampleData } from '../models/sample-data';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //fake server as base_path 
  base_path = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


// Get Employees data
getList(): Observable<SampleData> {
  console.log("Inside getEmployeeList API_CALL");
  return this.http
    .get<SampleData>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

  // Delete item by id
  deleteItem(id) {
    console.log("Inside Delete API_CALL");
    return this.http
      .delete<SampleData>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
