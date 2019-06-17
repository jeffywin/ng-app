import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor() {}

  confirm(message?: string): Observable<boolean> {
    const msg = window.confirm(message || "确定退出吗？");
    return of(msg);
  }
}
