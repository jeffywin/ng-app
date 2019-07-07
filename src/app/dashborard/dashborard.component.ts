import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-dashborard",
  templateUrl: "./dashborard.component.html",
  styleUrls: ["./dashborard.component.sass"]
})
export class DashborardComponent implements OnInit {
  heroes: Hero[] = [];
  listOfData = [
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
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
