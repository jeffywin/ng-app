import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "../article/article.component";
import { ArticleListComponent } from "../article-list/article-list.component";
import { ArticleDetailComponent } from "../article-detail/article-detail.component";
import { ArticleHomeComponent } from "../article-home/article-home.component";
import { ArticleDetailRosolverService } from "../article-detail-rosolver.service";
import { CanDeactivateGuardService } from "../can-deactivate-guard.service";

const articleRoutes: Routes = [
  {
    path: "article",
    component: ArticleComponent,
    children: [
      {
        path: "",
        component: ArticleListComponent,
        children: [
          {
            path: ":id",
            component: ArticleDetailComponent,
            canDeactivate: [CanDeactivateGuardService], // 未修改提示
            resolve: {
              article: ArticleDetailRosolverService // 通过路由预先获取数据
            }
          },
          {
            path: "",
            component: ArticleHomeComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
