import {Component, OnInit} from '@angular/core';
import {WeService} from '../../we.service';
import {ADSLPaymentInfoRq, ADSLPaymentInfoRs, FinalizePaymentRq, InitiatePaymentRq, InitiatePaymentRs, TokenModel} from '../../API/Models';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-asdl-renewal',
  templateUrl: './asdl-renewal.component.html',
  styleUrls: ['./asdl-renewal.component.css']
})
export class AsdlRenewalComponent implements OnInit {

  tokenModel: TokenModel;
  ADSLPaymentInfoRqModel: ADSLPaymentInfoRq;
  ADSLPaymentInfoRsModel: ADSLPaymentInfoRs;
  InitiatePaymentRqModel: InitiatePaymentRq;
  InitiatePaymentRsModel: InitiatePaymentRs;
  FinalizePaymentRqModel: FinalizePaymentRq;
  msisdn: string;
  email: string;

  constructor(private service: WeService, private route: ActivatedRoute) {
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
    this.ADSLPaymentInfoRqModel.header.customerId = '';
    this.ADSLPaymentInfoRqModel.header.locale = 'En';
    this.ADSLPaymentInfoRqModel.header.messageCode = '';
    this.ADSLPaymentInfoRqModel.header.msisdn = this.route.snapshot.queryParamMap.get('msisdn');
    this.service.callADSLPaymentInfo(this.ADSLPaymentInfoRqModel).subscribe(
      (res) => {
        this.ADSLPaymentInfoRsModel = res.body;
      }
    );

    this.msisdn = this.route.snapshot.queryParamMap.get('msisdn');
    this.email = this.route.snapshot.queryParamMap.get('msisdn');


  }


  onSubmit(onSubmit: NgForm) {
    this.InitiatePaymentRqModel.header.locale = 'en';
    this.InitiatePaymentRqModel.body.numberType = 'ADSL';
    this.InitiatePaymentRqModel.body.redirectionURL = 'www.test.com';
    this.InitiatePaymentRqModel.body.targetMobileNumber = this.msisdn;
    this.InitiatePaymentRqModel.body.amount = onSubmit.value.amount;

    this.service.callADSLPaymentInitiate(this.InitiatePaymentRqModel).subscribe(
      (res) => {
        if (res.ok) {
          this.InitiatePaymentRsModel = res.body;
          if (this.InitiatePaymentRsModel.header.responseCode === '0') {


          } else {
            // show error message
          }
        }
      }
    );
  }

}
