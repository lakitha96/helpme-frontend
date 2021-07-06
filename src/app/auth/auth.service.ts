import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {AuthTokenResponse} from "../models/auth.token.response";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(authTokenResponse: AuthTokenResponse) {
    this.loggedIn.next(true);
    this.router.navigate(['/']);
    if (authTokenResponse.access_token != null) {

    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
