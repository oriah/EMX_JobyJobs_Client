import { Component, OnInit } from '@angular/core';

import { TranslationService } from '../../shared/_services/generic/translation.service';
import { BreadcrumbService } from '../../shared/_services/generic/breadcrumbs.service';

import { Breadcrumb } from '../../shared/_generic/breadcrumbs';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  readonly menuLinks = [
    { label: 'לוח הבקרה', url: 'dashboard' }, { label: 'משרות', url: 'positions' },
    { label: 'ראיונות', url: 'interviews' }, { label: 'הודעות', url: 'messages' },
    { label: 'פרופיל', url: 'profile' }
  ];

  lang: string;
  breadcrumbs: Breadcrumb[];

  constructor(private translationService: TranslationService, private breadcrumbsService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbsService.breadcrumbSubject.subscribe(message => this.breadcrumbs = message);
    this.lang = this.translationService.locale.lang;
  }

  changeLocale(): void {
    this.translationService.changeLocale(this.lang);
  }
}
