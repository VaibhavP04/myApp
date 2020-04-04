import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroScreenComponent } from './intro-screen.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IntroScreenComponent
  }
];


@NgModule({
  declarations: [IntroScreenComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroScreenModule { }
