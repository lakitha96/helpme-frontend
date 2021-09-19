import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {HelpRequestDto} from "../models/help.request.dto";

@Injectable({
  providedIn: 'root'
})
export class HelpRequestClient {
  private apiServiceUrl = 'https://api-helpme-webapp.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }

  public getHelpTypes(): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.get<ApiCommonResponse>(`${this.apiServiceUrl}/helps/type`, {headers});
  }

  public saveHelpRequest(helpRequestDTO: HelpRequestDto): Observable<any> {
    const headers = this.getCustomHeaders();
    return this.http.post<ApiCommonResponse>(`${this.apiServiceUrl}/helps/request`, helpRequestDTO, {headers});
  }

  public getCustomHeaders(): any {
    return new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      responseType: 'application/json',
      Accept: 'application/json',
    });
  }
}
