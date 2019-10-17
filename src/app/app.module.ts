import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./components/items/items.component";
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { CartComponent } from "./components/cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProductAlertsComponent,
    ItemDetailComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
