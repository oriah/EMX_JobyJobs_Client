import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Locale } from '../../_generic/locale';

@Injectable()
export class TranslationService {

  locale: Locale;
  isLangChanged: Subject<boolean> = new Subject();

  constructor() {
    this.setLocale('he');
  }

  changeLocale(lang: string) {
    this.setLocale(lang);
    this.isLangChanged.next(true);
  }

  setLocale(lang: string): void {
    const direction = (lang === 'he') ? 'rtl' : 'ltr';
    this.locale = new Locale(lang, direction);
  }
}
