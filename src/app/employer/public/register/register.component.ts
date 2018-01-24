import { Component } from '@angular/core';

import { Employer } from '../../../shared/_models/employer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employer = new Employer;

  logo: File;
  logoPreview: string;

  constructor() {}

  setLogo(logo: File): void {
    this.logo = logo;

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.logoPreview = event.target['result'];
    };

    reader.readAsDataURL(logo);
  }

  removeLogo(): void {
    this.logo = null;
    this.logoPreview = null;
  }
}
