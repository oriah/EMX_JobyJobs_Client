import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../../shared/_services/breadcrumbs.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(private breadcrumbs: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbs.setBreadcrumb([{ url: 'positions', label: 'משרות' }]);
  }

}
