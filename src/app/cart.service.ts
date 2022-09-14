import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    // Exposes reference to array
    return this.items;
  }

  clearCart() {
    this.items = [];
    // Exposes reference to array
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>("/assets/shipping.json");
  }

  deleteProductFromCart(productToDelete: Product) {
    const spliceIndex = this.items.indexOf(productToDelete);
    this.items.splice(spliceIndex, 1);
  }

  constructor(private http: HttpClient) {}
}
