import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {AuthTokenResponse} from "../models/auth.token.response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private _loggedUser: boolean;

  constructor(private router: Router) {
    this._loggedUser = false;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get loggedUser() {
    return this._loggedUser;
  }

  login(authTokenResponse: AuthTokenResponse) {
    if (authTokenResponse.access_token != null) {
      this.loggedIn.next(true);
      this._loggedUser = true;
      this.router.navigate(['/feed']);
    }
  }

  logout() {
    this._loggedUser = false;
    this.loggedIn.next(false);
    this.router.navigate(['/user-login']);
  }
}
