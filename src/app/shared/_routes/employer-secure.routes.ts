import { Routes } from '@angular/router';

import { DashboardComponent } from '../../employer/secure/dashboard/dashboard.component';

export const EMPLOYER_SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];
