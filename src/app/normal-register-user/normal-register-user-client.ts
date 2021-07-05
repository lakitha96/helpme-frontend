import {UserLoginDto} from "../models/user.login.dto";
import {Observable} from "rxjs";
import {AuthTokenResponse} from "../models/auth.token.response";
import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import {UserRegisterDto} from "../models/user.register.dto";

@Injectable({
  providedIn: 'root'
})
export class NormalRegisterUserClient {

  private apiServiceUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {
  }
  public registerNormalUser(user: UserRegisterDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/register`, user)
  }

  public loginNormalUser(user: UserLoginDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/login`, user)
  }
}
