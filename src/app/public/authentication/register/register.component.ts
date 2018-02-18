import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppHttpService } from '../../../shared/_services/http/app-http.service';
import { UserSessionService } from '../../../shared/_services/user-session.service';

import { Employer } from '../../../shared/_models/employer.model';
import { Seeker } from '../../../shared/_models/seeker.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../authentication.css']
})
export class RegisterComponent {

  activeTab: 'employer' | 'seeker' = 'seeker';

  repeatPassword: string;

  employer = new Employer();
  seeker = new Seeker();

  isRegisterFailed: boolean;
  isSubmitting = false;

  constructor(private router: Router, private userSession: UserSessionService, private appHttp: AppHttpService) {}

  submit(isValid: boolean) {

    if (isValid) {
      this.isRegisterFailed = false;
      this.isSubmitting = true;
    }
  }
}
