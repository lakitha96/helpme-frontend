import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserLoginDto} from "../models/user.login.dto";
import {AuthTokenResponse} from "../models/auth.token.response";
import {HttpErrorResponse} from "@angular/common/http";
import {UserRegisterDto} from "../models/user.register.dto";
import {NormalRegisterUserClient} from "../normal-register-user/normal-register-user-client";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {OrganizationRegisterDto} from "../models/organization.register.dto";

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent implements OnInit {

  constructor(private registerUserClient: NormalRegisterUserClient,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  registerOrganization(registerForm: NgForm) {
    console.log(registerForm);
    this.registerUserClient.registerOrganization(new OrganizationRegisterDto(registerForm.controls.organizationName.value,
      registerForm.controls.address.value,
      '',
      new UserRegisterDto(registerForm.controls.username.value,
        registerForm.controls.email.value,
        registerForm.controls.password.value))).subscribe(
      (response: any) => {
        this.authService.login(new AuthTokenResponse(response.data.refresh_token, response.data.access_token));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  loginUser(loginForm: NgForm) {
    this.registerUserClient.loginNormalUser(new UserLoginDto(loginForm.controls.email.value,
      loginForm.controls.password.value)).subscribe(
      (response: any) => {
        //todo cache success response and navigate to home screen
        console.log(response)
        this.router.navigate(['/feed']);
        this.authService.login(new AuthTokenResponse(response.data.refresh_token, response.data.access_token));
      },
      (error: HttpErrorResponse) => {
        //todo handle in better way
        alert(error.message);
      }
    );
  }
}
