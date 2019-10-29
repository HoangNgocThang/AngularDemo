import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GirdService } from "../../services/gird.service";
@Component({
  selector: "app-test-grid",
  templateUrl: "./test-grid.component.html",
  styleUrls: ["./test-grid.component.scss"]
})
export class TestGridComponent implements OnInit {
  columnDefs = [
    { headerName: "Make", field: "make", sortable: true, filter: true },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient, private girdService: GirdService) {}

  //get data from service
  getData = () => {
    this.girdService.getData().subscribe(data => {
      console.log(data, "data from service");
      this.rowData = data;
    });
  };

  ngOnInit() {
    this.getData();
  }
}
