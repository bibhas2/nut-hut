import { Component, OnInit } from '@angular/core';
import { CatalogService, Product, CartItem } from '../catalog.service';

@Component({
  selector: 'app-shopcart-page',
  templateUrl: './shopcart-page.component.html',
  styleUrls: ['./shopcart-page.component.css']
})
export class ShopcartPageComponent implements OnInit {
  cart:CartItem[] = []

  constructor(private catalogSvc:CatalogService) { }

  ngOnInit(): void {
    this.cart = this.catalogSvc.getCart()
  }

  clear() {
    this.catalogSvc.clearCart()

    this.cart = this.catalogSvc.getCart()
  }
}
