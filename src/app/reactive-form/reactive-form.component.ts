import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { checkLength } from "../check-directive.directive";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.sass"]
})
export class ReactiveFormComponent implements OnInit {
  // myname = new FormControl("jeffywin");
  // mygroup = new FormGroup({
  //   name: new FormControl(""),
  //   age: new FormControl()
  // });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  // getName() {
  //   this.myname.valueChanges.subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // updateGroup() {
  // 单个数据更新： patchValue
  //   this.mygroup.setValue({
  //     name: "jeffywin",
  //     age: 18
  //   });
  // }

  stuForm = this.fb.group({
    // name: [""],
    name: [
      { value: "jeffywin", disabled: false },
      [Validators.required, Validators.minLength(5)]
    ],
    age: ["", [checkLength(/^[1-9]\d,{0,2}$/)]],
    score: this.fb.group({
      math: [""],
      English: [""]
    }),
    job: this.fb.array([this.fb.control("")])
  });

  get job() {
    return this.stuForm.get("job") as FormArray;
  }
  get age() {
    return this.stuForm.get("age");
  }

  addJob() {
    this.job.push(this.fb.control(""));
  }

  onSubmit() {
    // {name: "jeffywin", age: 12}
    console.log(this.stuForm.value);
  }
}
