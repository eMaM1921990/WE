import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  goToNext(){
    this.route.navigate(['/we/recharge']);
  }

  goOut(){
    window.location.href = 'https://my.te.eg/#/payment/rechargeAnonymous';
  }

}
