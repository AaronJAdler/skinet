import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.sass']
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$!: Observable<any[]>;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.breadcrumbService.breadcrumbs$;
  }

}
