import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserSessionService } from '../../../shared/_services/user-session.service';
import { AppHttpService } from '../../../shared/_services/http/app-http.service';

import { User } from '../../../shared/_models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../authentication.css']
})
export class LoginComponent {

  user = new User();

  rememberMe: boolean;
  isLoginFailed: boolean;
  isLoggingIn = false;

  constructor(private router: Router, private userSession: UserSessionService, private appHttp: AppHttpService) {}

  submit(isValid: boolean) {
    if (isValid) {
      this.isLoginFailed = false;
      this.isLoggingIn = true;

      this.appHttp.login(this.user.username, this.user.password)
        .then((response) => setTimeout(() => this.handleResponse(response), 2000));
    }
  }

  private handleResponse(token: string | boolean): void {
    if (typeof token === 'string') {
      this.user.accessToken = token;
      this.userSession.login(this.user, this.rememberMe);
      this.router.navigate(['/']);
    } else {
      this.isLoginFailed = true;
    }

    this.isLoggingIn = false;
  }

}
