import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WeService} from '../../we.service';
import {ADSLSystemInfo, TokenModel} from '../../API/Models';
import {Router} from '@angular/router';

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

  tokenModel: TokenModel;
  adslSysInfo: ADSLSystemInfo;

  constructor(private weService: WeService, private router: Router,) {

  }

  ngOnInit() {

    this.weService.generateToken().subscribe(
      (res) => {
        this.tokenModel = res.body;
      }
    );
  }

  onSubmit(onSubmit: NgForm) {
    console.log(onSubmit.value);
    console.log(this.verifyLandLine);
    this.asdlSystemInfo.header.msisdn = this.verifyLandLine.landLine;
    this.asdlSystemInfo.body.phoneNumber = this.verifyLandLine.landLine;
    this.asdlSystemInfo.body.areaCode = this.verifyLandLine.govCode;
    this.router.navigate(['/we/asdl-renewal']);

    this.weService.callADSLSystemInfoService(this.asdlSystemInfo)
      .subscribe((res) => {
          if (res.ok) {
            this.adslSysInfo = res.body;
            if (this.adslSysInfo.body.systemType === 'BSS') {
              this.router.navigate(['/we/asdl-renewal']);
            } else if (this.adslSysInfo.body.systemType === 'Simba') {
              window.location.href = this.adslSysInfo.body.redirectURL;
            } else {
            }
          } else {
            this.router.navigate(['/we/asdl-renewal']);

          }

        }
      );


  }
}
