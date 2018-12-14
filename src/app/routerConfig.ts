import {Routes} from '@angular/router';
import {RechargeComponent} from './recharge/recharge.component';
import {InternetComponent} from './internet/internet.component';
import {BssComponent} from './bss/bss.component';
import {RenewalComponent} from './renewal/renewal.component';

export const appRoutes: Routes = [
  {
    path: 'recharge',
    component: RechargeComponent
  },
  {
    path: 'internet-rechagre',
    component: InternetComponent
  },
  {
    path: 'bss',
    component: BssComponent
  },
  {
    path: 'renewal',
    component: RenewalComponent
  },
];
