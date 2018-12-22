import {Component, OnInit} from '@angular/core';
import {WeService} from '../../we.service';
import {ADSLPaymentInfoRq, ADSLPaymentInfoRs, FinalizePaymentRq, InitiatePaymentRq, InitiatePaymentRs, TokenModel} from '../../API/Models';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {TermsComponent} from '../terms/terms.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-asdl-renewal',
  templateUrl: './asdl-renewal.component.html',
  styleUrls: ['./asdl-renewal.component.css']
})
export class AsdlRenewalComponent implements OnInit {

  tokenModel: TokenModel;
  ADSLPaymentInfoRqModel: ADSLPaymentInfoRq = <ADSLPaymentInfoRq>{};
  ADSLPaymentInfoRsModel: ADSLPaymentInfoRs = <ADSLPaymentInfoRs>{};
  InitiatePaymentRqModel: InitiatePaymentRq;
  InitiatePaymentRsModel: InitiatePaymentRs;
  msisdn: string;
  email: string;
  subscriptionFee: number;

  constructor(private service: WeService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit() {

    if (!localStorage.getItem('token')) {
      this.service.generateToken().subscribe(
        (res) => {
          this.tokenModel = res.body;
          localStorage.setItem('token', this.tokenModel.body.jwt);
        }
      );
    }

    this.msisdn = this.route.snapshot.queryParamMap.get('msisdn');
    this.email = this.route.snapshot.queryParamMap.get('email');


    this.ADSLPaymentInfoRqModel = <ADSLPaymentInfoRq>{};
    this.ADSLPaymentInfoRsModel = <ADSLPaymentInfoRs>{};

    this.ADSLPaymentInfoRsModel.body = {
      subscriptionFee: 0.0,
      minPaidAmount: 0.0,
      renewalDate: '',
      subscriberType: ''
    };

    this.ADSLPaymentInfoRqModel.header = {
      customerId: '',
      locale: 'En',
      messageCode: '',
      msisdn: this.route.snapshot.queryParamMap.get('msisdn')
    };
    this.service.callADSLPaymentInfo(this.ADSLPaymentInfoRqModel).subscribe(
      (res) => {
        this.ADSLPaymentInfoRsModel = res.body;
        this.subscriptionFee = this.ADSLPaymentInfoRsModel.body.subscriptionFee;
      }
    );


  }


  openTermsAndCoditionDialog() {
    this.dialog.open(TermsComponent);
  }

  onSubmit(onSubmit: NgForm) {

    this.InitiatePaymentRqModel = <InitiatePaymentRq> {};
    this.InitiatePaymentRqModel.header = {
      locale: 'en',
      customerId: '',
      msisdn: this.msisdn,
      messageCode: '',
      timestamp: 0

    };

    this.InitiatePaymentRqModel.body = {
      numberType: 'ADSL',
      redirectionURL: 'http://localhost:4200/we/payment-finalize',
      targetMobileNumber: this.msisdn,
      amount: onSubmit.value.amount,
      sourceMobileNumber: ''
    };


    this.service.callADSLPaymentInitiate(this.InitiatePaymentRqModel).subscribe(
      (res) => {
        if (res.ok) {
          this.InitiatePaymentRsModel = res.body;
          if (this.InitiatePaymentRsModel.header.responseCode === '0') {
            localStorage.setItem('payment-ref', JSON.stringify(this.InitiatePaymentRsModel));
            localStorage.setItem('customer-email', this.email);
            window.location.href = 'http://localhost:4200/bank?transactionHashCode='+this.InitiatePaymentRsModel.body.hashCode;
          } else {
            // show error message
            console.log(this.InitiatePaymentRsModel.header.responseMessage);
          }
        }
      }
    );
  }

}
