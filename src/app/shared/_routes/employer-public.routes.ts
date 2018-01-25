import { Routes } from '@angular/router';

import { RegisterComponent } from '../../employer/public/register/register.component';
import { LoginComponent } from '../../employer/public/login/login.component';

export const EMPLOYER_PUBLIC_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
