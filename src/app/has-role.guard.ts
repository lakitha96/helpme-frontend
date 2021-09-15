import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthorized = route.data.role.includes(this.authService.userTokenInfo.authorities[0]);
    if (!isAuthorized) {
      if (this.authService.userTokenInfo.authorities[0].includes('ROLE_PENDING_ORGANIZATION')) {
        this.router.navigate(['/pending-organization']);
      } else {
        this.router.navigate(['/user-login']);
      }
    }
    return isAuthorized;
  }
}
