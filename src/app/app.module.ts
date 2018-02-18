import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatMenuModule, MatSelectModule } from '@angular/material';

import { TranslateModule } from './shared/_pipes/translate.module';
import { JobModule } from './employer/job/job.module';
import { CandidatesModule } from './employer/candidates/candidates.module';
import { SettingsModule } from './employer/settings/settings.module';
import { HomeModule } from './public/home/home.module';
import { AuthenticationModule } from './public/authentication/authentication.module';
import { ChatModule } from './shared/chat/chat.module';
import { JobViewModule } from './shared/job-view/job-view.module';
import { SeekerViewModule } from './shared/seeker-view/seeker-view.module';

import { BaseComponent } from './base.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TranslationService } from './shared/_services/http/translation.service';
import { LocaleService } from './shared/_services/locale.service';

import { TranslationsResolve } from './shared/_resolves/translations.resolve';
import { EmployerActiveJobsResolve } from './shared/_resolves/employer-jobs.resolve';

import { APP_ROUTES } from './shared/_routes/app.routes';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MatSelectModule, MatFormFieldModule, MatMenuModule,
    TranslateModule,
    HomeModule,
    AuthenticationModule,
    JobModule,
    CandidatesModule,
    SettingsModule,
    ChatModule,
    JobViewModule,
    SeekerViewModule
  ],
  providers: [LocaleService, TranslationService, TranslationsResolve, EmployerActiveJobsResolve],
  bootstrap: [BaseComponent]
})
export class AppModule {}
