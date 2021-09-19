import {UserLoginDto} from "../models/user.login.dto";
import {Observable} from "rxjs";
import {AuthTokenResponse} from "../models/auth.token.response";
import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import {UserRegisterDto} from "../models/user.register.dto";
import {OrganizationRegisterDto} from "../models/organization.register.dto";

@Injectable({
  providedIn: 'root'
})
export class NormalRegisterUserClient {

  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }
  public registerNormalUser(user: UserRegisterDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/register`, user)
  }

  public loginNormalUser(user: UserLoginDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/users/login`, user)
  }

  public registerOrganization(organization: OrganizationRegisterDto): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.apiServiceUrl}/organization/register`, organization)
  }
}
