import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { OrderConfirmViewComponent } from './order-confirm-view/order-confirm-view.component';


@NgModule({
  declarations: [PaymentViewComponent, OrderConfirmViewComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
