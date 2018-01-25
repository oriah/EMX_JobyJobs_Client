import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';

import { PublicComponent } from './public.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserSessionService } from '../../shared/_services/generic/user-session.service';
import { AppHttpService } from '../../shared/_services/employer/app-http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatProgressSpinnerModule
  ],
  declarations: [PublicComponent, RegisterComponent, LoginComponent],
  providers: [UserSessionService, AppHttpService]
})
export class PublicModule {}
