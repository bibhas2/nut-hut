import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  placeOrder() {
    this.router.navigate(['/checkout/receipt'])
  }

}
