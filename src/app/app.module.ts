import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {NewsFeedComponent} from "./news-feed/news-feed.component";
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from "./auth/auth.guard";
import {AgmCoreModule} from "@agm/core";
import {HelpRequestComponent} from './help-request/help-request.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {PaypalTransactionComponent} from './paypal-tranasaction/paypal-transaction.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    NormalRegisterUserComponent,
    NewsFeedComponent,
    NavComponent,
    HomeComponent,
    HelpRequestComponent,
    PaypalTransactionComponent,
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
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          canActivate: [AuthGuard],
        },
        {
          path: 'login',
          component: NormalRegisterUserComponent
        },
        {
          path: 'help-request',
          component: HelpRequestComponent
        },
        {
          path: 'payment',
          component: PaypalTransactionComponent
        },
        {
          path: '**',
          redirectTo: ''
        }
      ]
    ),
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
    FlexLayoutModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
