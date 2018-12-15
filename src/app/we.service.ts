import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeService {

  apiURL = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  generateToken() {
    this.http.get(this.apiURL + '/api/user/generatetoken?channelId=WEB_APP').subscribe(
      (res) => {
        if (res) {
          localStorage.setItem('token', res['body']['jwt'] );
          return res['body']['jwt'];
        }
      }
    );
  }

  callADSLPaymentInfoService(body) {
    let token = localStorage.getItem('token');
    this.http.post(this.apiURL + '/api/user/adsl/systeminfo', body ).subscribe(
      (res) => {
        if (res) {
          return res['body']['jwt'];
        }
      }
    );
  }


}
