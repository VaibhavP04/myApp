import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
