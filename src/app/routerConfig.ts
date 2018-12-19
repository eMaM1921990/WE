import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ParentComponent} from './parent/parent.component';
import {AsdlPaymentComponent} from './parent/asdl-payment/asdl-payment.component';
import {AsdlRenewalComponent} from './parent/asdl-renewal/asdl-renewal.component';

export const appRoutes: Routes = [
  {
    path: '', component: LandingComponent
  }
  ,
  {
    path: 'we' , component: ParentComponent, children: [
      {path: 'asdl-payment', component: AsdlPaymentComponent},
      {path: 'asdl-renewal', component: AsdlRenewalComponent}

    ]
  }
];
