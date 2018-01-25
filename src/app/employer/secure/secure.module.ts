import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { SecureComponent } from './secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BreadcrumbService } from '../../shared/_services/generic/breadcrumbs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    ChartsModule
  ],
  declarations: [SecureComponent, DashboardComponent],
  providers: [BreadcrumbService]
})
export class SecureModule {}
