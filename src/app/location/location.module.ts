import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  }
];

@NgModule({
  declarations: [LocationComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AndroidPermissions]
})
export class LocationModule { }
