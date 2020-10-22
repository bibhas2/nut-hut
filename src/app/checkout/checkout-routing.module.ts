import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderConfirmViewComponent } from './order-confirm-view/order-confirm-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';

const routes: Routes = [
  {path: "payment", component: PaymentViewComponent},
  {path: "receipt", component: OrderConfirmViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
