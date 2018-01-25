import { Routes } from '@angular/router';

import { EMPLOYER_ROUTES } from './employer.routes';

export const APP_ROUTES: Routes = [
  { path: 'employer', children: EMPLOYER_ROUTES, },
  // { path: 'seeker', component: OperatorComponent, children: OPERATOR_ROUTES, canActivate: [LoggedInGuard] },
];
