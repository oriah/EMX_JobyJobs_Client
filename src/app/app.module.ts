import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployerModule } from './employer/employer.module';

import { AppComponent } from './app.component';

import { TranslationService } from './shared/_services/translation.service';

import { APP_ROUTES } from './shared/_routes/app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployerModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
