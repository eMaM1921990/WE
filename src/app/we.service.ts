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
    return this.http.get(this.apiURL + '/api/user/generatetoken?channelId=WEB_APP', {observe: 'response'});
  }


  callADSLSystemInfoService(body) {
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Jwt', token);
    return this.http.post(this.apiURL + '/api/user/adsl/systeminfo', body, headers);
  }


}
