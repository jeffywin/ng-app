import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AutuGuardService {
  constructor(private authServie: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    console.log("路由守卫启动了");
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authServie.isLogin) {
      return true;
    }
    this.authServie.redirectUrl = url;
    this.router.navigate(["login"]);
    return false;
  }
}
