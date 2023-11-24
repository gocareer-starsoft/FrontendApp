import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string=`${environment.serverBasePath}`;
  constructor(private http: HttpClient) {}

  signIn(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-in`, credentials);
  }

  signUp(userData: { username: string; password: string; roles: string[] }): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-in`, userData);
  }
}
