import { Injectable } from '@angular/core';

export class Product {
  id:string
  title:string
  description:string
  price:number
  image:string
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private cart:Product[] = []

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

  addToCart(p:Product) {
    this.cart.push(p)
  }

  clearCart() {
    this.cart = []
  }

  getCart() : Product[] {
    return this.cart
  }

  getProductById(productId:string) : Product {
    return this.catalog.filter(p => p.id == productId)[0]
  }
}
