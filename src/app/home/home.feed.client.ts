import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";

@Injectable({
  providedIn: 'root'
})
export class HomeFeedClient {
  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  public getAllPendingHelpRequests(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/request/pending`, {headers});
  }

  public getAllOngoingHelpRequests(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/request/ongoing`, {headers});
  }

  public getOngoingHelpRequestByUuid(uuid: string): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/request/ongoing/` + uuid, {headers});
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }
}
