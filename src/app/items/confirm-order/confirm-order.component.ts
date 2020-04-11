import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmAddressComponent } from '../confirm-address/confirm-address.component';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent implements OnInit {

  cartPriceIn;
  totalPriceCheck;
  cartItems;
  cart;


  constructor(private modalCtrl: ModalController) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.totalPriceCheck = this.cart.totalPrice + 2;
  }

  ngOnInit() {
    console.log("here");
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async OpenModel() {
    this.cart.totalPrice = this.totalPriceCheck;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.modalCtrl.dismiss('1');
    const presentModel = await this.modalCtrl.create({
      component: ConfirmAddressComponent,
      componentProps: {
        title: 'Billing Address',
        type: 'billing',
      },
      showBackdrop: true,
      id: '2',
      mode: "ios",
      cssClass: 'change-address-shipping-modal'
    });

    presentModel.onWillDismiss().then((data) => {
      //localStorage.setItem('this.cartItems', JSON.stringify(this.cartItems));
      //custom code
    });

    return await presentModel.present();
  }

  increamentCount(id) {
    let index = this.cartItems.findIndex(x => x.id == id);
    ++this.cartItems[index].qtyInCart;
    console.log(this.cartItems);
    this.cart.totalPrice = this.cart.totalPrice + this.cartItems[index].price;
    this.totalPriceCheck = this.cart.totalPrice + 2;
  }

  decrementCount(id) {
    let index = this.cartItems.findIndex(x => x.id == id);
    --this.cartItems[index].qtyInCart;
    this.cart.totalPrice = this.cart.totalPrice - this.cartItems[index].price;
    this.totalPriceCheck = this.cart.totalPrice + 2;
    if (this.cartItems[index].qtyInCart == 0)
      this.cartItems.splice(index, 1);
      if(this.cartItems.length == 0){
        this.modalCtrl.dismiss();
      }
    console.log(this.cartItems);
  }

}
