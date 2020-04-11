import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-check-out-modal',
  templateUrl: './check-out-modal.page.html',
  styleUrls: ['./check-out-modal.page.scss'],
})
export class CheckOutModalPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
