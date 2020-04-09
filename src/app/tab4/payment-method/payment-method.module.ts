import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentMethodComponent } from './payment-method.component';



@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PaymentMethodComponent }])
  ]
})
export class PaymentMethodModule { }
