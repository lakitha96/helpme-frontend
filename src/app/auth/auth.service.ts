import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthTokenResponse} from "../models/auth.token.response";
import {UserToken} from "../models/user.token";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken!: string;
  public userTokenInfo!: UserToken;

  constructor(private router: Router) {
  }

  isAuthorized() {
    return !!this.accessToken;
  }

  login(authTokenResponse: AuthTokenResponse) {
    this.accessToken = authTokenResponse.access_token;
    localStorage.setItem('access_token', authTokenResponse.access_token);
    this.router.navigate(['/feed']);
    this.userTokenInfo = this.getTokenInfo(authTokenResponse.access_token);
  }

  logout() {
    this.accessToken = '';
    this.router.navigate(['/user-login']);
    localStorage.clear();
  }

  private getTokenInfo(token: string): UserToken {
    this.userTokenInfo = JSON.parse(atob(token.split('.')[1])) as UserToken;
    return this.userTokenInfo;
  }

  getRole() {
    if (<string>localStorage.getItem("access_token") != null) {
      this.getTokenInfo(<string>localStorage.getItem("access_token"))
      return this.userTokenInfo.authorities[0];
    }
    return null;
  }
}
