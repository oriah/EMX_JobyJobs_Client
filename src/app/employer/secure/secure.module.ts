import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';

import { SecureComponent } from './secure.component';
import { PositionsComponent } from './positions/positions.component';

import { BreadcrumbService } from '../../shared/_services/breadcrumbs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSelectModule
  ],
  declarations: [SecureComponent, PositionsComponent],
  providers: [BreadcrumbService]
})
export class SecureModule {}
