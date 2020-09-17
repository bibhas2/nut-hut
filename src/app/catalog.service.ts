import { Injectable } from '@angular/core';

export class Product {
  id:string
  title:string
  description:string
  price:number
  image:string
}

export class CartItem {
  constructor(public product:Product,
    public quantity:number){}
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private viewingHistory:Product[] = []
  private cart:CartItem[] = []

  private catalog:Product[] = [
    {
      id: "P001",
      title: "Mixed Nuts",
      description: "Get a flavor of all your favorite nuts.",
      price: 7.99,
      image: "/assets/mixed.jpg"
    },
    {
      id: "P002",
      title: "Walnut Nuts",
      description: "Tasty tasty walnuts.",
      price: 9.99,
      image: "/assets/walnut.jpg"
    },
    {
      id: "P003",
      title: "Almond",
      description: "Eat raw or make Almond milk in a blender.",
      price: 12.99,
      image: "/assets/almond.jpg"
    },
  ]

  constructor() { }

  getCatalog() : Product[] {
    return this.catalog
  }

  addToCart(productId:string, qty:number) {
    const cartItem = this.cart.find(item => item.product.id == productId)

    if (!cartItem) {
      this.cart.push(new CartItem(this.getProductById(productId), qty))
    } else {
      cartItem.quantity += qty
    }
  }

  clearCart() {
    this.cart = []
  }

  getCart() : CartItem[] {
    return this.cart
  }

  getProductById(productId:string) : Product {
    const p = this.catalog.find(p => p.id == productId)

    if (p == undefined) {
      throw `Invalid product ID: ${productId}`
    }

    return p
  }

  getViewingHistory() : Product[] {
    return this.viewingHistory
  }

  addToViewingHistory(p:Product) {
    if (!this.viewingHistory.find(item => item.id == p.id)) {
      this.viewingHistory.push(p)
    }
  }

}
