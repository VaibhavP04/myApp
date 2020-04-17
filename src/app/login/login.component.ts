import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { GenieeServiceService } from '../providers/geniee-service.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showVerificationCard = false;
  disableVerifyButton = true;
  showSuccessScreenImage = false;
  loginForm: FormGroup;
  deviceId;
  otp: number;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uniqueDeviceID: UniqueDeviceID,
    private service: GenieeServiceService,
    private platform: Platform) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (this.router.getCurrentNavigation().extras.state.logout) {
          this.showSuccessScreenImage = false;
          this.showVerificationCard = false;
        }
      }
    });
    if (platform.is('cordova')) {
      this.uniqueDeviceID.get()
        .then((uuid: any) => this.deviceId = uuid)
        .catch((error: any) => console.log(error));
    }
  }

  config = {
    length: 6,
    allowNumbersOnly: true,
    inputStyles: {
      'border-bottom': '1px solid #000',
      'border-top': '0',
      'border-right': '0',
      'border-left': '0',
      'border-radius': '0'
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobileNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('hr');
    this.service.login(this.loginForm.controls["mobileNumber"].value, this.deviceId)
      .subscribe((response: any) => {
        if (response.status) {
          if (response.message == 'OTP sent successfully') { //new registration
            this.showVerificationCard = !this.showVerificationCard;
          } else { //login
            this.loginForm.reset();
            this.router.navigate(['/location']);
          }
        } else {
          alert(response.message)
        }
      })
  }

  showSuccessScreen() {
    this.service.verifyOTP(this.loginForm.controls["mobileNumber"].value, this.otp)
    .subscribe((response : any) => {
      if (response.status) {
        localStorage.setItem("userId", response.userId);
        this.showSuccessScreenImage = !this.showSuccessScreenImage;
        setTimeout(() => {
          this.router.navigate(['/location']);
        }, 2000);
      } else {
        alert(response.message)
      }
    })

  }

  onOtpChange(event) {
    if (event.length === 4) {
      this.disableVerifyButton = false;
    } else {
      this.otp = event;
      this.disableVerifyButton = true;
    }
  }
}

