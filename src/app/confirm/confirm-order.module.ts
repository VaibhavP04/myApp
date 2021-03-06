import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order.component';



@NgModule({
  declarations: [ConfirmOrderComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ConfirmOrderComponent }])
  ]
})
export class ConfirmOrderModule { }
