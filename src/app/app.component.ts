import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'E-Shopping-fe';
  user: string = 'Mert Kozlu'
  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5
  };
  product2 = {
    productId: 2,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5
  };
  product3 = {
    productId: 3,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5
  };
  product4 = {
    productId: 4,
    productName: 'Pc',
    categoryId: 1,
    unitPrice: 5
  };

  products = [
    this.product1, 
    this.product2, 
    this.product3, 
    this.product4
  ];


}
