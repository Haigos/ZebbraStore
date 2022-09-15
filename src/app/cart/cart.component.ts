import { CartService } from "../cart.service";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Product } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  products = this.cartService.getItems();

  onSubmit() {
    if (this.checkoutForm.value.name === "" || this.checkoutForm.value.address === "") {
      window.alert("Please fill out fields.");
    } else {
      this.products = this.cartService.clearCart();
      window.alert("Check the console for details concerning your order.");
      console.warn(
        "Order for '" + this.checkoutForm.value.name + "' will be shipped to: " + this.checkoutForm.value.address
      );
      this.checkoutForm.reset();
    }
  }

  deleteProduct(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }
}
