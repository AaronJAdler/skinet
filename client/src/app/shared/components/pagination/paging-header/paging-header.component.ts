import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPageChangedEvent } from 'src/app/shared/models/pageChangedEvent';

/**
 * Will throw "app-paging-header is not a known element of module" if any of the required inputs are not provided in selector tag
 */
@Component({
  selector: 'app-paging-header[pageNumber][pageSize][totalCount]',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.sass']
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber!: number;
  @Input() pageSize!: number;
  @Input() totalCount!: number;

  constructor() { 
  }

  ngOnInit(): void {
    if ( !this.pageNumber || !this.pageSize || (!this.totalCount && this.totalCount != 0) ) throw new Error(`Paging Header missing required input -
    Page Number: ${this.pageNumber}
    Page Size: ${this.pageSize}
    Total Count: ${this.totalCount}\n`
    );
  }
}
