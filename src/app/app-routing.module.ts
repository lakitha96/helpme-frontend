import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {NormalRegisterUserComponent} from "./normal-register-user/normal-register-user.component";
import {HelpRequestComponent} from './help-request/help-request.component';
import {PaypalTransactionComponent} from './paypal-tranasaction/paypal-transaction.component';
import {HomeComponent} from './home/home.component';
import {OrganizationRegisterComponent} from "./organization-register/organization-register.component";
import {HasRoleGuard} from "./has-role.guard";
import {UserDonationHistoryComponent} from "./user-donation-history/user-donation-history.component";
import {FundRequestComponent} from "./fund-request/fund-request.component";
import {PendingOrganizationComponent} from "./pending-organization/pending-organization.component";
import {FundRequestHistoryComponent} from "./fund-request-history/fund-request-history.component";
import {FundRaiseHistoryComponent} from "./fund-raise-history/fund-raise-history.component";
import {AffectedMapComponent} from "./affected-map/affected-map.component";

const routes: Routes = [
  {path: '', redirectTo: 'welcomeToHelpMe', pathMatch: 'full'},
  {path: 'welcomeToHelpMe', component: LandingComponent},
  {path: 'user-login', component: NormalRegisterUserComponent},
  {path: 'organization-login', component: OrganizationRegisterComponent},
  {path: 'help-request', component: HelpRequestComponent, canActivate: [HasRoleGuard], data: {role: 'ROLE_USER'}},
  {
    path: 'payment/:uuid',
    component: PaypalTransactionComponent,
    canActivate: [HasRoleGuard],
    data: {role: 'ROLE_USER'}
  },
  {
    path: 'feed',
    component: HomeComponent,
    canActivate: [HasRoleGuard],
    data: {role: ['ROLE_USER', 'ROLE_ORGANIZATION']}
  },
  {
    path: 'affected-map',
    component: AffectedMapComponent,
    canActivate: [HasRoleGuard],
    data: {role: ['ROLE_USER', 'ROLE_ORGANIZATION']}
  },
  {
    path: 'user-donation-history',
    component: UserDonationHistoryComponent,
    canActivate: [HasRoleGuard],
    data: {role: ['ROLE_USER', 'ROLE_ORGANIZATION']}
  },
  {
    path: 'fund-request/:uuid',
    component: FundRequestComponent,
    canActivate: [HasRoleGuard],
    data: {role: 'ROLE_ORGANIZATION'}
  },
  {
    path: 'pending-organization',
    component: PendingOrganizationComponent,
    canActivate: [HasRoleGuard],
    data: {role: 'ROLE_PENDING_ORGANIZATION'}
  },
  {
    path: 'fund-request-history',
    component: FundRequestHistoryComponent,
    canActivate: [HasRoleGuard],
    data: {role: 'ROLE_ORGANIZATION'}
  },
  {
    path: 'fund-raise-history/:uuid',
    component: FundRaiseHistoryComponent,
    canActivate: [HasRoleGuard],
    data: {role: 'ROLE_ORGANIZATION'}
  },
  {path: '**', redirectTo: 'welcomeToHelpMe', pathMatch: 'full'}
];

@NgModule({
  providers: [CurrencyPipe],
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
