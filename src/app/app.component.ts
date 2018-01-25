import { Component, OnInit } from '@angular/core';

import { TranslationService } from './shared/_services/generic/translation.service';

import { Locale } from './shared/_generic/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  locale: Locale;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.locale = this.translationService.locale;
    this.translationService.isLangChanged.subscribe(() => this.locale = this.translationService.locale);
  }
}
