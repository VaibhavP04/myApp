import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ConfirmAddressComponent } from './confirm-address/confirm-address.component';
import { PaymentSheetComponent } from './payment-sheet/payment-sheet.component';
import { OrderConfirmationSheetComponent } from './order-confirmation-sheet/order-confirmation-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
  ],
  declarations: [ItemsPage, ConfirmOrderComponent, ConfirmAddressComponent, PaymentSheetComponent, OrderConfirmationSheetComponent],
  entryComponents: [ConfirmOrderComponent, ConfirmAddressComponent, PaymentSheetComponent, OrderConfirmationSheetComponent]
})
export class ItemsPageModule {}
