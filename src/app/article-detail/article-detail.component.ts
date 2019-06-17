import { Component, OnInit, HostBinding } from "@angular/core";
import { slideInDownAnimation } from "../animation";
import { ActivatedRoute, Router } from "@angular/router";
import { Hero } from "../hero";
import { DialogService } from "../dialog.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.sass"],
  animations: [slideInDownAnimation]
})
export class ArticleDetailComponent implements OnInit {
  @HostBinding("@routeAnimation") routeAnimation = true;
  @HostBinding("style.display") display = "block";
  @HostBinding("style.position") position = "absolute";

  article: Hero;
  editName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    // 通过路由获取数据
    this.route.data.subscribe((data: { article: Hero }) => {
      this.article = data.article;
      this.editName = data.article.name;
    });
  }

  save() {
    this.article.name = this.editName;
    this.goArticleList();
  }

  cancle() {
    this.goArticleList();
  }

  goArticleList() {
    const articleId = this.article ? this.article.id : null;
    this.router.navigate(["../", { id: articleId }], {
      relativeTo: this.route
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.article || this.article.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm("你还没保存!");
  }
}
