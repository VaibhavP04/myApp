import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentSheetComponent } from '../payment-sheet/payment-sheet.component';

@Component({
  selector: 'app-confirm-address',
  templateUrl: './confirm-address.component.html',
  styleUrls: ['./confirm-address.component.scss'],
})
export class ConfirmAddressComponent implements OnInit {

  cart;
  constructor(private modalCtrl: ModalController) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
  }

  ngOnInit() {
  }


  async OpenModel() {
    this.modalCtrl.dismiss('2');
    const presentModel = await this.modalCtrl.create({
      component: PaymentSheetComponent,
      componentProps: {
        title: 'Billing Address',
        type: 'billing',
      },
      showBackdrop: true,
      id: '3',
      mode: "ios",
      cssClass: 'change-address-shipping-modal'
    });
    presentModel.onWillDismiss().then((data) => {
      console.log(data);
      //custom code
    });

    return await presentModel.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
