import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private router: Router) { }

  config = {
    length:4,
    allowNumbersOnly: true,
    inputStyles:{
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
    if(this.loginForm.invalid) {
      return;
    }
    this.showVerificationCard = !this.showVerificationCard;
  }

  showSuccessScreen() {
    this.showSuccessScreenImage = !this.showSuccessScreenImage;
    setTimeout(() => {
      this.router.navigate(['/tabs']);
    }, 2000);
  }

  onOtpChange(event){
    if(event.length === 4) {
      this.disableVerifyButton = false;
    } else {
      this.disableVerifyButton = true;
    }
  }

}
