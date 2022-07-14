import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  productQuantity = 1;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.shopService.getProduct(id).subscribe({
        next: product => {
          this.product = product;
          this.breadcrumbService.set('@productDetails', product.name)
        },
        error: err => console.error('loadProduct got an error: ' + err)
      });
    }
  }

  onQuantityChange(sign: string)
  {
    switch (sign) {
      case "+":
        this.productQuantity ++;
        break;
      case "-":
        if(this.productQuantity > 1) this.productQuantity --;
        break;
      default:
        break;
    }
  }

}
