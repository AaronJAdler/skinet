import { Component, Input, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  faCartShopping = faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

}
