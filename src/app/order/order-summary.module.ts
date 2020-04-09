import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary.component';



@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: OrderSummaryComponent }])
  ]
})
export class OrderSummaryModule { }
