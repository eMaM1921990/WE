import {Component, OnInit} from '@angular/core';
import {FinalizePaymentRq, FinalizePaymentRs, InitiatePaymentRs} from '../../API/Models';
import {WeService} from '../../we.service';

@Component({
  selector: 'app-adsl-finalize-payment',
  templateUrl: './adsl-finalize-payment.component.html',
  styleUrls: ['./adsl-finalize-payment.component.css']
})
export class AdslFinalizePaymentComponent implements OnInit {

  InitiatePaymentRsModel: InitiatePaymentRs;
  FinalizePaymentRqModel: FinalizePaymentRq;
  FinalizePaymentRsModel: FinalizePaymentRs;
  hasError = false;

  constructor(private service: WeService) {
  }

  ngOnInit() {
    this.InitiatePaymentRsModel = JSON.parse(localStorage.getItem('payment-ref'));
    this.FinalizePaymentRqModel = <FinalizePaymentRq>{};
    this.FinalizePaymentRqModel.header = {
      timestamp: 0,
      customerId: '',
      msisdn: this.InitiatePaymentRsModel.body.mobileNumber,
      messageCode: '',
      locale: 'en'
    };

    this.FinalizePaymentRqModel.body = {
      numberType: 'ADSL',
      email: localStorage.getItem('customer-email'),
      targetMobileNumber: this.InitiatePaymentRsModel.body.mobileNumber,
      hashCode: this.InitiatePaymentRsModel.body.hashCode,
      transactionID: this.InitiatePaymentRsModel.body.transactionID
    };

    this.service.callADSLPaymentFinalize(this.FinalizePaymentRqModel).subscribe(
      (res) => {
        this.FinalizePaymentRsModel = res.body;
        this.hasError = true;
        localStorage.removeItem('payment-ref');
      }
    );
  }

}
