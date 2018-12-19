import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import {appRoutes} from './routerConfig';
import {HttpClientModule} from '@angular/common/http';
import {WeService} from './we.service';
import { HeaderComponent } from './parent/header/header.component';
import { FooterComponent } from './parent/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ParentComponent } from './parent/parent.component';
import { AsdlPaymentComponent } from './parent/asdl-payment/asdl-payment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ParentComponent,
    AsdlPaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [WeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
