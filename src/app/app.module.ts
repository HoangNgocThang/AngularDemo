import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./components/items/items.component";
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProductAlertsComponent,
    ItemDetailComponent,
    CartComponent,
    HeroesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
