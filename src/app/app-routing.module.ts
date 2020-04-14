import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: './intro-screen/intro-screen.module#IntroScreenModule'
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule'
  },
  {
    path: 'category-modal/:id',
    loadChildren: () => import('./category-modal/category-modal.module').then( m => m.CategoryModalPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'items/:id',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'order-summary',
    loadChildren: './order/order-summary.module#OrderSummaryModule'
  },
  {
    path: 'order-confirmation',
    loadChildren: './confirm/order-confimation/order-confirmation.module#OrderConfirmationModule'
  },
  {
    path: 'confirm-order',
    loadChildren: './confirm/confirm-order.module#ConfirmOrderModule'
  },
  {
    path: 'payment',
    loadChildren: './confirm/payment/payment.module#PaymentModule'
  },
  {
    path: 'update-profile',
    loadChildren: './tab4/update/update-profile.module#UpdateProfileModule'
  },
  {
    path: 'payment-update',
    loadChildren: './tab4/payment-method/payment-method.module#PaymentMethodModule'
  },
  {
    path: 'save-address',
    loadChildren: './tab4/address/saved-address.module#SavedAddressModule'
  },
  {
    path: 'support',
    loadChildren: './tab4/support/support.module#SupportModule'
  },
  {
    path: 'refer',
    loadChildren: './tab4/refer/refer.module#ReferModule'
  },
  {
    path: 'about',
    loadChildren: './tab4/about/about.module#AboutModule'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
