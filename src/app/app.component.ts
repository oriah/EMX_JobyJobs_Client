import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslationService } from './shared/_services/http/translation.service';
import { LocaleService } from './shared/_services/locale.service';

import { Translation } from './shared/_models/translation.model';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lang: string;
  langDirection: 'rtl' | 'ltr';
  translations: Translation[];

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private translationsService: TranslationService,
              private localeService: LocaleService) {}

  ngOnInit() {
    this.lang = this.localeService.initLang();

    this.langDirection = this.lang === 'he' ? 'rtl' : 'ltr';
    this.renderer.addClass(document.body, this.langDirection);

    this.translations = this.route.snapshot.data['translations'];
    if (!this.localeService.getTranslations()) {
      this.localeService.setTranslations(this.translations);
    }
  }

  changeLocale(lang: string): void {
    this.lang = lang;
    this.setBodyClass();
    this.localeService.setLang(lang);
    this.langDirection = this.lang === 'he' ? 'rtl' : 'ltr';

    this.translationsService.getTranslations(this.lang).then(response => {
      this.translations = response;
      this.localeService.setTranslations(this.translations);
    });
  }

  private setBodyClass(): void {
    if (this.lang === 'he' && this.localeService.lang !== 'he') {
      this.renderer.addClass(document.body, 'rtl');
      this.renderer.removeClass(document.body, 'ltr');
    }

    if (this.lang !== 'he' && this.localeService.lang === 'he') {
      this.renderer.addClass(document.body, 'ltr');
      this.renderer.removeClass(document.body, 'rtl');
    }
  }
}
