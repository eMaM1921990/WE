import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-asdl-payment',
  templateUrl: './asdl-payment.component.html',
  styleUrls: ['./asdl-payment.component.css']
})
export class AsdlPaymentComponent implements OnInit {

  verifyLandLine = {
    'govCode': '',
    'landLine': '',
    'email': ''
  };

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit(onSubmit: NgForm){
    console.log(onSubmit.value);
  }
}
