import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HeroDetailModule } from "./hero-detail/hero-detail.module";
import { HerosModule } from "./heros/heros.module";
import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { NewsModule } from "./news/news.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { HerosComponent } from './heros/heros.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashborardComponent } from "./dashborard/dashborard.component";
import { LoginComponent } from "./login/login.component";
import { ArticleModule } from "./article/article.module";
import { TplFormModule } from "./tpl-form/tpl-form.module";
import { ReactiveFormModule } from "./reactive-form/reactive-form.module";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import zh from "@angular/common/locales/zh";
import { registerLocaleData } from "@angular/common";
registerLocaleData(zh);
import { TableComponent } from "./table/table.component";
// import { TableDetailComponent } from "./table-detail/table-detail.component";
@NgModule({
  declarations: [
    AppComponent,
    // HerosComponent,
    // HeroDetailComponent,
    DashborardComponent,
    LoginComponent
    // TableComponent
    // TableDetailComponent
  ],
  imports: [
    ReactiveFormModule,
    TplFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ArticleModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HerosModule,
    HeroDetailModule,
    AdminModule,
    NewsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
