import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RechargeComponent } from './recharge/recharge.component';
import { InternetComponent } from './internet/internet.component';
import { BssComponent } from './bss/bss.component';
import { RenewalComponent } from './renewal/renewal.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    RechargeComponent,
    InternetComponent,
    BssComponent,
    RenewalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
