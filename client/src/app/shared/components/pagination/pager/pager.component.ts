import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPageChangedEvent } from 'src/app/shared/models/pageChangedEvent';

@Component({
  selector: 'app-pager[totalCount][pageSize][pageNumber]',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit {
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Input() pageNumber!: number;
  @Output() pageNumberChange = new EventEmitter<number>();
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if ( !this.pageNumber || !this.pageSize || (!this.totalCount && this.totalCount != 0) ) throw new Error(`Pager missing required input -
    Page Number: ${this.pageNumber}
    Page Size: ${this.pageSize}
    Total Count: ${this.totalCount}\n`
    );
  }

  onPageChanged(event: IPageChangedEvent){
    if (this.pageNumber === event.page) return;
    this.pageNumber = event.page;
    this.pageNumberChange.emit(this.pageNumber);
    this.onChange.emit();
  }

}
