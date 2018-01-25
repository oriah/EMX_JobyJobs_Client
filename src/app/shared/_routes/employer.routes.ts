import { Routes } from '@angular/router';


import { SecureComponent } from '../../employer/secure/secure.component';
import { PublicComponent } from '../../employer/public/public.component';

import { EMPLOYER_PUBLIC_ROUTES } from './employer-public.routes';
import { EMPLOYER_SECURE_ROUTES } from './employer-secure.routes';

export const EMPLOYER_ROUTES: Routes = [
  { path: '', component: PublicComponent, children: EMPLOYER_PUBLIC_ROUTES },
  { path: '', component: SecureComponent, children: EMPLOYER_SECURE_ROUTES }
];
