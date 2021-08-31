import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {NormalRegisterUserComponent} from "./normal-register-user/normal-register-user.component";
import {HelpRequestComponent} from './help-request/help-request.component';
import {PaypalTransactionComponent} from './paypal-tranasaction/paypal-transaction.component';
import {HomeComponent} from './home/home.component';
import {OrganizationRegisterComponent} from "./organization-register/organization-register.component";
import {HasRoleGuard} from "./has-role.guard";

const routes: Routes = [
  {path: '', redirectTo: 'welcomeToHelpMe', pathMatch: 'full'},
  {path: 'welcomeToHelpMe', component: LandingComponent},
  {path: 'user-login', component: NormalRegisterUserComponent},
  {path: 'organization-login', component: OrganizationRegisterComponent},
  {path: 'help-request', component: HelpRequestComponent, canActivate: [HasRoleGuard],  data: {role: 'ROLE_USER'}},
  {path: 'payment/:uuid', component: PaypalTransactionComponent, canActivate: [HasRoleGuard],  data: {role: 'ROLE_USER'}},
  {path: 'feed', component: HomeComponent, canActivate: [HasRoleGuard],  data: {role: ['ROLE_USER', 'ROLE_ORGANIZATION']}},
  {path: '**', redirectTo: 'welcomeToHelpMe', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
