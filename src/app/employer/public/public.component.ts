import { Component } from '@angular/core';

import { TranslationService } from '../../shared/_services/generic/translation.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  lang: string;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.lang = this.translationService.locale.lang;
  }

  changeLocale(): void {
    this.translationService.changeLocale(this.lang);
  }
}
