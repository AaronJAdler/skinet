import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonListComponent } from './filter-button-list.component';

describe('FilterButtonListComponent', () => {
  let component: FilterButtonListComponent;
  let fixture: ComponentFixture<FilterButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterButtonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
