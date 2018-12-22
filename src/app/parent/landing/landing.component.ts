import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  routing: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }


  finish(event) {
    console.log((event.value === '1'));
    if (event.value === '1') {
      this.route.navigate(['/we/asdl-payment']);
    } else {
      window.location.href = 'https://my.te.eg/#/payment/rechargeAnonymous';
    }
  }

}
