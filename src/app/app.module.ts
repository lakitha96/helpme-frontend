import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NormalRegisterUserComponent} from "./normal-register-user/normal-register-user.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {AuthService} from './auth/auth.service';
import {AgmCoreModule} from "@agm/core";
import {HelpRequestComponent} from './help-request/help-request.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {PaypalTransactionComponent} from './paypal-tranasaction/paypal-transaction.component';
import {FlexLayoutModule} from "@angular/flex-layout";

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {LandingComponent} from "./landing/landing.component";
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';


@NgModule({
  declarations: [
    AppComponent,
    NormalRegisterUserComponent,
    NavComponent,
    HomeComponent,
    HelpRequestComponent,
    PaypalTransactionComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    OrganizationRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-nnj4WeNNlKojwS_7oC5OarJH2PwKlio'
    }),
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
