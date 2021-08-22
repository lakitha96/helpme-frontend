import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {MenuItem} from "../models/menu.item";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class NavComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  menuItems: Array<MenuItem> = [];

  constructor() {
    this.isLoggedIn$ = new Observable();
    this.menuItems = [
      {
        label: 'logout',
        icon: 'login',
        routing: 'login',
        showOnMobile: true,
        showOnTablet: true,
        showOnDesktop: true
      },
      {
        label: 'Request Help',
        icon: 'help',
        routing: '/help-request',
        showOnMobile: true,
        showOnTablet: true,
        showOnDesktop: false
      }
    ];
  }

  ngOnInit(): void {
  }

  // onLogout() {
  //   this.authService.logout();
  // }
  //
  // ngOnInit(): void {
  //   this.isLoggedIn$ = this.authService.isLoggedIn;
  // }

}
