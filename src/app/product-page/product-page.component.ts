import { Component, OnInit } from '@angular/core';
import { Product, CatalogService } from '../catalog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product = undefined
  viewingHistory: Product[] = []

  constructor(
    private route: ActivatedRoute,
    private catalogSvc: CatalogService,
    private router: Router) { }

  ngOnInit(): void {
    //Lookup the productId URL parameter
    // let id = this.route.snapshot.params['productId']

    this.route.paramMap.subscribe(params => {
      //Retrieve the product by id
      let id = params.get("productId")
      
      this.product = this.catalogSvc.getProductById(id)

      this.viewingHistory = this.catalogSvc.getViewingHistory()

      this.catalogSvc.addToViewingHistory(this.product)
    })
  }

  add(qtyTxt) {
    //Add the product to cart
    const quantity = parseInt(qtyTxt.value)

    if (isNaN(quantity)) {
      alert("Please enter a valid quantity.")
      qtyTxt.value = ""
      
      return
    }

    this.catalogSvc.addToCart(this.product.id, quantity)

    //Navigate to the cart page
    this.router.navigate(["/cart"])
  }
}
