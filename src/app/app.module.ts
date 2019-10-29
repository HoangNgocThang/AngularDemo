import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./components/items/items.component";
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProductAlertsComponent,
    ItemDetailComponent,
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
