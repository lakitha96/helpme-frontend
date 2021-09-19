import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DonationHistoryClient {

  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  public getDonationHistory(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/fund-requests/donation/history`, {headers});
  }

  public getFundRequestHistory(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/fund-requests/history`, {headers});
  }

  public getDonationHistoryForFundRequestId(fundRequestUuid: any): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/fund-requests/donations/history/` + fundRequestUuid, {headers});
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }
}
