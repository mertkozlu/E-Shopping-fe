import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5
  };

  product2 = {
    productId: 1,
    productName: 'Computer',
    categoryId: 1,
    unitPrice: 5
  };

  products = [
    this.product1, 
    this.product2, 
  ];
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
