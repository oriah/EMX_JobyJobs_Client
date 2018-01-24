import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

import { EmployerComponent } from './employer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    SecureModule
  ],
  declarations: [EmployerComponent]
})
export class EmployerModule {}
