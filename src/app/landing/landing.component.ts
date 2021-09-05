import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isAuthorized() {
    return this.authService.isAuthorized();
  }
}
