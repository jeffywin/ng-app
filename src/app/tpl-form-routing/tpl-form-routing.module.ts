import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TplFormComponent } from "../tpl-form/tpl-form.component";

const formRoutes: Routes = [{ path: "tplform", component: TplFormComponent }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class TplFormRoutingModule {}
