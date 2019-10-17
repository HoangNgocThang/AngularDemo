import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemComponent } from "./components/items/items.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
  { path: "", component: ItemComponent },
  { path: "products/:id", component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
