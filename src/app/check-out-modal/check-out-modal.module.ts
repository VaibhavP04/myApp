import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOutModalPageRoutingModule } from './check-out-modal-routing.module';

import { CheckOutModalPage } from './check-out-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOutModalPageRoutingModule
  ],
  declarations: [CheckOutModalPage]
})
export class CheckOutModalPageModule {}
