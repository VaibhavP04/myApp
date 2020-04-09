import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './update-profile.component';



@NgModule({
  declarations: [UpdateProfileComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UpdateProfileComponent }])
  ]
})
export class UpdateProfileModule { }
