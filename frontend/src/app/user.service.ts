import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class UserService {

  private _registerURL = "http://localhost:3000/api/register";
  constructor(private _http: HttpClient) { }

  register(body: any){
    
   return this._http.post<any>(this._registerURL,body);
  }

}
