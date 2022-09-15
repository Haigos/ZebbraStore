import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "carbon-components-angular";
import { CartComponent } from "./cart/cart.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { InputModule } from "carbon-components-angular";
import { ItemListComponent } from "./item-list/item-list.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StructuredListModule } from "carbon-components-angular";
import { TilesModule } from "carbon-components-angular";

@NgModule({
  declarations: [AppComponent, ItemListComponent, HeaderComponent, CartComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    StructuredListModule,
    HttpClientModule,
    TilesModule,
    ReactiveFormsModule,
    InputModule,
    RouterModule.forRoot([
      { path: "", component: ItemListComponent },
      { path: "cart", component: CartComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
