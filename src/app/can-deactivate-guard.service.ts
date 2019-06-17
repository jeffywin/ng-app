import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

// 定义一个接口
interface CanComponentDeacivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: "root"
})
// Can类实现这个CanDeactivate接口，并且指定一个泛型CanComponentDeacivate,要实现接口中的方法
// 接收一个component: ArticleDetailComponent article-routing.module中
// 并用类型CanComponentDeacivate约束它，component中必须要有canDeactivate方法，有就执行下这个方法
export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeacivate> {
  canDeactivate(component: CanComponentDeacivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  constructor() {}
}
