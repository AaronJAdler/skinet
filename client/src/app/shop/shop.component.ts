import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand, IProductType } from '../shared/models/filter';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm!: ElementRef;
  products: IProduct[] = [];
  brands!: IBrand[];
  productTypes!: IProductType[];
  totalCount: number = 0;
  shopParams = new ShopParams();
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts(pageReset = false) {
    if (pageReset) this.shopParams.pageNumber = 1;
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        console.log(response);
        this.products = response?.data ?? [];
        this.shopParams.pageNumber = response?.pageIndex ?? this.shopParams.pageNumber;
        this.shopParams.pageSize = response?.pageSize ?? this.shopParams.pageSize;
        this.totalCount = response?.count ?? 0;
      },
      error: err => console.error('getProducts got an error: ' + err),
      complete: () => console.log("getProducts got a complete notification")
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => {
        this.brands = [{id: 0, name: 'All'}, ...response];
      },
      error: err => console.error('getBrands got an error: ' + err),
      complete: () => console.log("getBrands got a complete notification")
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe({
      next: response => {
        this.productTypes = [{id: 0, name: 'All'}, ...response];
      },
      error: err => console.error('getProductTypes got an error: ' + err),
      complete: () => console.log("getProductTypes got a complete notification")
    });
  }

  onSearch() {
    this.shopParams.searchTerm = this.searchTerm.nativeElement.value;
    this.getProducts(true);
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
