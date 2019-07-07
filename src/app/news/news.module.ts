import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news.component";
import { NewAComponent } from "../new-a/new-a.component";
import { NewBComponent } from "../new-b/new-b.component";
import { NewsRoutingModule } from "../news-routing/news-routing.module";
import { TableComponent } from "../table/table.component";
import { NzTableModule } from "ng-zorro-antd/table";

// import { TableDetailComponent } from "../table-detail/table-detail.component";

@NgModule({
  declarations: [
    NewsComponent,
    NewAComponent,
    NewBComponent,
    TableComponent
    // TableDetailComponent
  ],
  imports: [CommonModule, NewsRoutingModule, NzTableModule],
  exports: [NewsComponent]
})
export class NewsModule {}
