import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderConfirmationComponent } from './order-confirmation.component';



@NgModule({
  declarations: [OrderConfirmationComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: OrderConfirmationComponent }])
  ]
})
export class OrderConfirmationModule { }
