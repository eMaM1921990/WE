import {Routes} from '@angular/router';
import {LandingComponent} from './parent/landing/landing.component';
import {ParentComponent} from './parent/parent.component';
import {AsdlPaymentComponent} from './parent/asdl-payment/asdl-payment.component';
import {AsdlRenewalComponent} from './parent/asdl-renewal/asdl-renewal.component';
import {AdslFinalizePaymentComponent} from './parent/adsl-finalize-payment/adsl-finalize-payment.component';
import {BankComponent} from './bank/bank.component';

export const appRoutes: Routes = [
  {
    path: '', redirectTo: '/we/recharge', pathMatch:'full'
  }
  ,
  {
    path: 'we' , component: ParentComponent, children: [
      {path: 'recharge', component: LandingComponent},
      {path: 'asdl-payment', component: AsdlPaymentComponent},
      {path: 'asdl-renewal', component: AsdlRenewalComponent},
      {path: 'payment-finalize', component: AdslFinalizePaymentComponent}

    ]
  },
  {
    path: 'bank', component: BankComponent
  }
];
