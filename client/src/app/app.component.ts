import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'ClientApp';
  products!: any[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: (response: any) => {
        console.log('OnInit got a next value:');
        console.log(response);
        this.products = response.data;
      },
      error: err => console.error('OnInit got an error: ' + err),
      complete: () => console.log("OnInit got a complete notification")
    });
  }
}
