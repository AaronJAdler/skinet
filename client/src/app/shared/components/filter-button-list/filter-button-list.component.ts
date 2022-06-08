import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilter } from '../../models/filter';

@Component({
  selector: 'app-filter-button-list[Title][Options][optionId]',
  templateUrl: './filter-button-list.component.html',
  styleUrls: ['./filter-button-list.component.sass']
})
export class FilterButtonListComponent<T> implements OnInit {
  @Input() Title!: string;
  @Input() Options!: IFilter[];
  @Input() optionId!: number;
  @Output() optionIdChange = new EventEmitter<number>();
  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if ( !this.Title || !this.Options || (!this.optionId && this.optionId != 0) ) throw new Error(`Filter Button List missing required input -
    Title: ${this.Title}
    Options: ${JSON.stringify(this.Options)}
    Title: ${this.optionId}`
    );
  }

  onOptionSelected(optionId: number) {
    this.optionId = optionId;
    this.optionIdChange.emit(this.optionId);
    this.onSelect.emit();
  }

}
