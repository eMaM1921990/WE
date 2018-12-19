import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ADSLSystemInfo, TokenModel} from './API/Models';
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


}
