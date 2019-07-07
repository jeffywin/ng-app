import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"]
})
export class TableComponent implements OnInit {
  constructor() {}
  @Input() data: [];
  @Input() coloumns: [];
  @Input() tableType: boolean;
  ngOnInit() {
    console.log(this.data, this.coloumns);
  }
}
