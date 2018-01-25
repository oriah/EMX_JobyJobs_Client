import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

@NgModule({
  imports: [CommonModule, RouterModule, PublicModule, SecureModule]
})
export class EmployerModule {}
