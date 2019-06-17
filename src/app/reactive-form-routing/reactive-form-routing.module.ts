import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";

const reactiveRoutes: Routes = [
  { path: "reactiveform", component: ReactiveFormComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(reactiveRoutes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule {}
