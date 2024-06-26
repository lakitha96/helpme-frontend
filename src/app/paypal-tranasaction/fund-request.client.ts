import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {Injectable} from "@angular/core";
import {DonateRequestDto} from "../models/payment/donate.request.dto";
import {FundRequestDto} from "../models/fund_request/fund.request.dto";

@Injectable({
  providedIn: 'root'
})
export class FundRequestClient {

  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  public saveFundRequest(fundRequestDTO: FundRequestDto): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.post<ApiCommonResponse>(`${this.apiServiceUrl}/fund-requests/raise`, fundRequestDTO, {headers});
  }

  public getOngoingHelpRequestByUuid(uuid: string): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/request/ongoing/` + uuid, {headers});
  }

  public saveDonation(donationRequest: DonateRequestDto): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.post<ApiCommonResponse>(`${this.apiServiceUrl}/fund-requests/donation`, donationRequest, {headers});
  }

  public getAddress(lat: string, lng: string): Observable<any> {
    return this.http.get<Object>("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyC-nnj4WeNNlKojwS_7oC5OarJH2PwKlio");
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }
}
