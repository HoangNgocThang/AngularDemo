import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.scss"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Input() testObject;
  @Input() testVariable;
  @Input() testFuction;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  click = () => {
    this.testFuction();
  };
}
