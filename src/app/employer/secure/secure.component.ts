import { Component, OnInit } from '@angular/core';

import { TranslationService } from '../../shared/_services/translation.service';
import { BreadcrumbService } from '../../shared/_services/breadcrumbs.service';

import { Breadcrumb } from '../../shared/_generic/breadcrumbs';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  lang: string;
  breadcrumbs: Breadcrumb[];

  constructor(private translationService: TranslationService, private breadcrumbs: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbs.breadcrumbSubject.subscribe(message => console.log(message));
    this.lang = this.translationService.locale.lang;
  }

  changeLocale(): void {
    this.translationService.changeLocale(this.lang);
  }
}
