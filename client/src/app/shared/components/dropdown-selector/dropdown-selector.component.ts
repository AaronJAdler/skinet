import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '../../models/dropdownOption';

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.sass']
})
export class DropdownSelectorComponent implements OnInit {
  @Input() Options: IOption[] = [];
  @Input() selectedOption: string = '';
  @Output() selectedOptionChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter();

  constructor() {
    if(this.selectedOption === '') {
      this.Options = [{ name: '-select-', value: ''}, ...this.Options];
    }
   }

  ngOnInit(): void {
  }

  onOptionSelected(value: string){
    this.selectedOption = value;
    this.selectedOptionChange.emit(this.selectedOption);
    this.onChange.emit();
  }

}
