import { Component, OnInit } from "@angular/core";
import { products } from "../../mocks/products";

@Component({
  templateUrl: "../items/items.component.html",
  selector: "app-item",
  styleUrls: ["../items/items.component.scss"]
})
export class ItemComponent implements OnInit {
  dataSend = "DATA";
  price = "10000000 VNĐ";
  imageLink = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  isShow = false;
  number = "";
  itemDefalt = "";
  listItem = products;
  vari = false;
  obj = { name: "thanghn", id: 1 };

  constructor() {}

  ngOnInit() {}

  toggleForgot = () => {
    this.isShow = !this.isShow;
  };

  onKey = event => {
    this.number = event.target.value;
  };

  onClick = () => {
    alert("hello");
  };

  share = (index: number, item: any) => {
    alert("Share " + item.name);
  };

  onNotify() {
    window.alert("Sẽ có đợt giảm giá cho sản phẩm này vào 20/10/2019");
  }

  testClick = () => {
    window.alert("alert by parent with data:" + this.dataSend);
  };
}
