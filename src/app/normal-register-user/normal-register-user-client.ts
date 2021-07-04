import {NormalUser} from "../models/normal.user";
import {Observable} from "rxjs";
import {AuthTokenResponse} from "../models/auth.token.response";
import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NormalRegisterUserClient {

  private apiServiceUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {
  }
  public registerNormalUser(user: NormalUser): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`{$this.apiServerUrl}/users/register`, user)
  }

  public loginNormalUser(user: NormalUser): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/login`, user)
  }
}
