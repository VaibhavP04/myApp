import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-confirmation-sheet',
  templateUrl: './order-confirmation-sheet.component.html',
  styleUrls: ['./order-confirmation-sheet.component.scss'],
})
export class OrderConfirmationSheetComponent implements OnInit {

  cartItems;
  cart;
  constructor(private modalCtrl: ModalController) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.cart =JSON.parse(localStorage.getItem('cart'));
   }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss('4');
  }


}
