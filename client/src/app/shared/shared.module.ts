import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectorComponent } from './components/dropdown-selector/dropdown-selector.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/pagination/paging-header/paging-header.component';
import { PagerComponent } from './components/pagination/pager/pager.component';
import { FilterButtonListComponent } from './components/filter-button-list/filter-button-list.component';



@NgModule({
  declarations: [
    DropdownSelectorComponent,
    PagingHeaderComponent,
    PagerComponent,
    FilterButtonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  exports: [
    DropdownSelectorComponent,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    FilterButtonListComponent
  ]
})
export class SharedModule { }