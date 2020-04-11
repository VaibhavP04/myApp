import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderConfirmationSheetComponent } from '../order-confirmation-sheet/order-confirmation-sheet.component';

@Component({
  selector: 'app-payment-sheet',
  templateUrl: './payment-sheet.component.html',
  styleUrls: ['./payment-sheet.component.scss'],
})
export class PaymentSheetComponent implements OnInit {

  cart;

  constructor(private modalCtrl: ModalController) { 
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
  }

  ngOnInit() {}

  async openModal() {
    this.modalCtrl.dismiss('3');
    const presentModel = await this.modalCtrl.create({
      component: OrderConfirmationSheetComponent,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      id: '4',
      mode: "ios",
      cssClass: 'change-address-shipping-modal'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
      //custom code
    });

    return await presentModel.present();
  }

}
