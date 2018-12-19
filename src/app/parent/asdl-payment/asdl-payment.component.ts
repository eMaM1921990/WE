import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WeService} from '../../we.service';

declare function require(url: string);


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
  token;
  governements = require('../../gov.json');
  asdlSystemInfo = {
    'header':
      {
        'customerId': '',
        'msisdn': '',
        'messageCode': '',
        'locale': 'En'
      },
    'body':
      {
        'areaCode': '',
        'phoneNumber': ''
      }
  };


  constructor(private weService: WeService) {

  }

  ngOnInit() {

/*    this.weService.generateToken().subscribe(
      (res) => {
        const response = res.body;
        this.token = response.body.jwt;
        localStorage.setItem('token', this.token);

      }
    );*/
    console.log(this.token);
  }

  onSubmit(onSubmit: NgForm) {
    console.log(onSubmit.value);
    console.log(this.verifyLandLine);
    this.asdlSystemInfo.header.msisdn = this.verifyLandLine.landLine;
    this.asdlSystemInfo.body.phoneNumber = this.verifyLandLine.landLine;
    this.asdlSystemInfo.body.areaCode = this.verifyLandLine.govCode;
    console.log(this.asdlSystemInfo);

    window.location.href = 'https://www.mytedata.net/wps/portal/ssp/AnonymousRenewal/';

    // this.weService.callADSLSystemInfoService(this.asdlSystemInfo).subscribe((res) => {
    //   console.log(res);
    //   const response = res.body;
    //   if (response.body.systemType === 'BSS') {
    //
    //   } else if (response.body.systemType === 'Simba') {
    //     window.location.href = response.body.redirectURL;
    //   } else {
    //
    //   }
    // });


  }
}
