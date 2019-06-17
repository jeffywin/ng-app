import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  Validators,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

export function checkLength(lenReg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forlength = lenReg.test(control.value);
    return forlength ? null : { lengthValid: { value: control.value } };
  };
}

@Directive({
  selector: "[appCheckDirective]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckDirectiveDirective,
      multi: true
    }
  ]
})
export class CheckDirectiveDirective {
  constructor() {}
  @Input("appCheckDirective") reg: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.reg ? checkLength(new RegExp(this.reg))(control) : null;
  }
}
