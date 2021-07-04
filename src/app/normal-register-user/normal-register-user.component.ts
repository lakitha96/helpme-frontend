import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NormalUser} from "../models/normal.user";
import {AuthTokenResponse} from "../models/auth.token.response";
import {NormalRegisterUserClient} from "./normal-register-user-client";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-normal-register-user',
  templateUrl: './normal-register-user.component.html',
  styleUrls: ['./normal-register-user.component.css']
})
export class NormalRegisterUserComponent implements OnInit {
  constructor(private registerUserClient: NormalRegisterUserClient) {
  }

  public loginUser(formData: NgForm): void {
    this.registerUserClient.loginNormalUser(new NormalUser(formData.controls.email.value,
      formData.controls.password.value)).subscribe(
      (response: AuthTokenResponse) => {
        //todo cache success response and navigate to home screen
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        //todo handle in better way
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
  }
}
