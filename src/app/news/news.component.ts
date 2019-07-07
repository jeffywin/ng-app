import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.sass"]
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  nzData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];

  coloumns = [
    {
      key: "name",
      name: "名字"
    },
    {
      key: "age",
      name: "年龄"
    },
    {
      key: "address",
      name: "地址"
    },
    {
      key: "action",
      name: "操作"
    }
  ];
}
