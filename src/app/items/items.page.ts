import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items = [
    {
      id: 0,
      name: "French Fries",
      price: 75,
      isAvaiable: true,
      qtyInCart: 0
    },
    {
      id: 1,
      name: "Golden Fries",
      price: 90,
      isAvaiable: true,
      qtyInCart: 0
    },
    {
      id: 2,
      name: "Mango Chips",
      price: 120,
      isAvaiable: true,
      qtyInCart: 0
    },
    {
      id: 3,
      name: "Crunchy Juice",
      price: 140,
      isAvaiable: true,
      qtyInCart: 0
    },
    {
      id: 4,
      name: "Black Forest Ice Cream",
      price: 190,
      isAvaiable: true,
      qtyInCart: 0
    }
  ]

  cart = {
    qty: 0,
    totalPrice: 0
  }

  cartItems = [];


  constructor(public router: Router, public location: Location, private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  async OpenModel(){
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('cart', JSON.stringify(this.cart));
    const presentModel = await this.modalCtrl.create({
      component: ConfirmOrderComponent,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      id: '1',
      showBackdrop: true,
      mode: "ios",
      cssClass: 'change-address-shipping-modal'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(JSON.parse(localStorage.getItem('cartItems')));
      console.log(data);
      //custom code
    });

    return await presentModel.present();
  }

  async addToCart(id) {
    console.log(this.cart);
    this.items[id].qtyInCart = 1;
    this.cart.qty += 1;
    this.cart.totalPrice += this.items[id].price;
    this.cartItems.push(this.items[id]);
    console.log(this.cartItems);
  }

  increamentCount(id) {
    ++this.items[id].qtyInCart;
    ++this.cart.qty;
    this.cart.totalPrice += this.items[id].price;
     let index = this.cartItems.findIndex(x => x.id == id);
     this.cartItems.splice(index, 1);
     this.cartItems.push(this.items[id]);
    // this.cartItems[index].qtyInCart = this.cartItems[index].qtyInCart + 1;
     console.log(this.cartItems);
    
  }

  decrementCount(id) {
    --this.items[id].qtyInCart;
    --this.cart.qty;
    this.cart.totalPrice -= this.items[id].price;
    let index = this.cartItems.findIndex(x => x.id == id);
     this.cartItems.splice(index, 1);
     this.cartItems.push(this.items[id]);
     console.log(this.cartItems);
    // console.log(this.cart);
  }
 

}
