import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'ClientApp';
  products!: IProduct[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products').subscribe({
      next: response => {
        console.log('OnInit got a next value:');
        console.log(response);
        this.products = response.data;
      },
      error: err => console.error('OnInit got an error: ' + err),
      complete: () => console.log("OnInit got a complete notification")
    });
  }
}
