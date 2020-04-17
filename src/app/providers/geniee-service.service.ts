import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenieeServiceService {

  constructor(private http: HttpClient) { }

  //headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  login(phoneNum, deviceID) {
    return this.http.get(`http://45.40.132.61:8080/MobileApp/rest/doLogin/${phoneNum}/${deviceID}`, this.httpOptions)
  }

  verifyOTP(phoneNum, OTP) {
    return this.http.get(`http://45.40.132.61:8080/MobileApp/rest/doLogin/${phoneNum}/${OTP}`, this.httpOptions)
  }
}
