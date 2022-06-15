import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  faCartShopping = faCartShopping;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.shopService.getProduct(id).subscribe({
        next: product => {
          this.product = product;
        },
        error: err => console.error('loadProduct got an error: ' + err)
      });
    }
  }

}
