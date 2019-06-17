import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean;
  redirectUrl: string;
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000), tap(val => this.isLogin = true)
    );
  }

  logout(): void {
    this.isLogin = false;
  }
}
