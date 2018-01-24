import { Routes } from '@angular/router';

import { LoginComponent } from '../../employer/public/login/login.component';
import { RegisterComponent } from '../../employer/public/register/register.component';
import { SecureComponent } from '../../employer/secure/secure.component';

import { EMPLOYER_SECURE_ROUTES } from './employer-secure.routes';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: SecureComponent, children: EMPLOYER_SECURE_ROUTES }
];
