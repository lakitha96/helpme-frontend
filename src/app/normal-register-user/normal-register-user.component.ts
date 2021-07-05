import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {UserLoginDto} from "../models/user.login.dto";
import {AuthTokenResponse} from "../models/auth.token.response";
import {NormalRegisterUserClient} from "./normal-register-user-client";
import {NgForm} from "@angular/forms";
import {UserRegisterDto} from "../models/user.register.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-normal-register-user',
  templateUrl: './normal-register-user.component.html',
  styleUrls: ['./normal-register-user.component.css']
})
export class NormalRegisterUserComponent implements OnInit {
  constructor(private registerUserClient: NormalRegisterUserClient, private router: Router) {
  }

  public loginUser(formData: NgForm): void {
    this.registerUserClient.loginNormalUser(new UserLoginDto(formData.controls.email.value,
      formData.controls.password.value)).subscribe(
      (response: AuthTokenResponse) => {
        //todo cache success response and navigate to home screen
        console.log(response)
        this.router.navigate(['dashboard']);
      },
      (error: HttpErrorResponse) => {
        //todo handle in better way
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    this.registerUserClient.registerNormalUser(new UserRegisterDto(registerForm.controls.username.value,
      registerForm.controls.email.value,
      registerForm.controls.password.value)).subscribe(
      (response: AuthTokenResponse) => {
        console.log(response)

      },
      (error: HttpErrorResponse) => {
        //todo handle in better way
        alert(error.message);
      }
    );
  }
}
