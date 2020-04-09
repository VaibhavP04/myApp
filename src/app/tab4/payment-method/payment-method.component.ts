import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {

  showPayment = false;
  showSuccess = false;
  constructor() { }

  ngOnInit() {}

  showPaymentMethods() {
    this.showPayment = true;
  }

  showSuccessFullCardSave() {
    this.showSuccess = true;
  }

}
