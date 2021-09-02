import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FundRequestClient {

  private apiServiceUrl = 'http://localhost:8081/api';


  constructor(private http: HttpClient) {
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
