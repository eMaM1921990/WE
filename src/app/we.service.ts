import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ADSLPaymentInfoRs, ADSLSystemInfo, FinalizePaymentRs, InitiatePaymentRs, TokenModel} from './API/Models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeService {

  apiURL = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  generateToken(): Observable<HttpResponse<TokenModel>> {
    return this.http.get<TokenModel>(this.apiURL + '/api/user/generatetoken?channelId=WEB_APP', {observe: 'response'});
  }


  callADSLSystemInfoService(body): Observable<HttpResponse<ADSLSystemInfo>> {

    const httpOptions = {
      observe: 'response',
      headers: new HttpHeaders({
        'Jwt': localStorage.getItem('token')
      })
    };

    return this.http.post<ADSLSystemInfo>(this.apiURL + '/api/user/adsl/systeminfo', body, {observe: 'response'});
  }

  callADSLPaymentInfo(body): Observable<HttpResponse<ADSLPaymentInfoRs>> {
    return this.http.post<ADSLPaymentInfoRs>(this.apiURL + '/api/user/adsl/paymentinfo', body, {observe: 'response'});
  }

  callADSLPaymentInitiate(body): Observable<HttpResponse<InitiatePaymentRs>> {
    return this.http.post<InitiatePaymentRs>(this.apiURL + '/api/payment/pay/unregisteredcard/initiate', body, {observe: 'response'});
  }


  callADSLPaymentFinalize(body): Observable<HttpResponse<FinalizePaymentRs>> {
    return this.http.post<FinalizePaymentRs>(this.apiURL + '/api/payment/pay/unregisteredcard/finalize', body, {observe: 'response'});
  }

}
