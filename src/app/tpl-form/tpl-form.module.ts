import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TplFormComponent } from "./tpl-form.component";
import { TplFormRoutingModule } from "../tpl-form-routing/tpl-form-routing.module";
import { FormsModule } from "@angular/forms";
import { CheckDirectiveDirective } from "../check-directive.directive";

@NgModule({
  declarations: [TplFormComponent, CheckDirectiveDirective],
  imports: [CommonModule, TplFormRoutingModule, FormsModule]
})
export class TplFormModule {}
