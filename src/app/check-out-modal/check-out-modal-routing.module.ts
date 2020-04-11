import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOutModalPage } from './check-out-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CheckOutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckOutModalPageRoutingModule {}
