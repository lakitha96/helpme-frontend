import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCommonResponse} from "../models/api.common.response";
import {AuthService} from "../auth/auth.service";
import {HelpRequestDto} from "../models/help.request.dto";

@Injectable({
  providedIn: 'root'
})
export class HelpRequestClient {
  private apiServiceUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient, private authService: AuthService) {
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
