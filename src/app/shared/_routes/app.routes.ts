import { Routes } from '@angular/router';

import { EMPLOYER_ROUTES } from './employer.routes';

import { EmployerComponent } from '../../employer/employer.component';

export const APP_ROUTES: Routes = [
  { path: 'employer', component: EmployerComponent, children: EMPLOYER_ROUTES, },
  // { path: 'seeker', component: OperatorComponent, children: OPERATOR_ROUTES, canActivate: [LoggedInGuard] },
];
