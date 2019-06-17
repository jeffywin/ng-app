import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormComponent } from "./reactive-form.component";
import { ReactiveFormRoutingModule } from "../reactive-form-routing/reactive-form-routing.module";

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormRoutingModule, ReactiveFormsModule]
})
export class ReactiveFormModule {}
