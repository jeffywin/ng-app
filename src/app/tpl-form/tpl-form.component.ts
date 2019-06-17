import { Component, OnInit } from "@angular/core";
import { Teacher } from "../teacher";

@Component({
  selector: "app-tpl-form",
  templateUrl: "./tpl-form.component.html",
  styleUrls: ["./tpl-form.component.sass"]
})
export class TplFormComponent implements OnInit {
  jobs: string[] = ["游戏天才", "电竞选手", "职业拳王", "股神"];
  tc = new Teacher("jeffywin", 18, 1, this.jobs[0]);
  submit: boolean = false;
  get tcContent() {
    return JSON.stringify(this.tc);
  }
  //ng-untouched有没有访问过 ng-pristine值有没有变化 ng-valid值是否合法
  constructor() {}

  ngOnInit() {}

  add(): void {
    this.tc = new Teacher("", 20, 3, this.jobs[3]);
  }

  onSubmit() {
    console.log(1);
    this.submit = true;
  }
}
