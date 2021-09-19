import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {Injectable} from "@angular/core";
import {DonateRequestDto} from "../models/payment/donate.request.dto";

@Injectable({
  providedIn: 'root'
})
export class MapServiceClient {

  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  public getAllOngoingHelpRequestsMapLocations(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/affected/location/`, {headers});
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }
}
