import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../../mocks/products";
import { CartService } from "../../cart.service";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.scss"]
})
export class ItemDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("id")];
    });
  }

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }
}
