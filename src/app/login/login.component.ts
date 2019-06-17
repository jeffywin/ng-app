import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }

  // 在admin 路由中配置路由守卫  canActivate: [AutuGuardService]
  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLogin) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

}
