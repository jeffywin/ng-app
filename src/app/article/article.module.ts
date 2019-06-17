import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleRoutingModule } from '../article-routing/article-routing.module';
import { ArticleHomeComponent } from '../article-home/article-home.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [ArticleComponent, ArticleHomeComponent, ArticleListComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ]
})
export class ArticleModule { }
