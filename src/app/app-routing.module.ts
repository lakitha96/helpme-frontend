import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from "./auth/auth.guard";
import { LandingComponent } from './landing/landing.component';
import {NormalRegisterUserComponent} from "./normal-register-user/normal-register-user.component";
import {HelpRequestComponent} from './help-request/help-request.component';
import {PaypalTransactionComponent} from './paypal-tranasaction/paypal-transaction.component';
import {HomeComponent} from './home/home.component';

const routes: Routes =[
  { path: '', redirectTo: 'welcomeToHelpMe', pathMatch: 'full' },
  { path: 'welcomeToHelpMe',             component: PaypalTransactionComponent },
  { path: 'login',             component: NormalRegisterUserComponent },
  { path: 'help-request',             component: HelpRequestComponent },
  { path: 'payment',             component: PaypalTransactionComponent },
  { path: '**',  redirectTo: 'welcomeToHelpMe', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
