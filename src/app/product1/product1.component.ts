import { Product, ProductService } from './../share/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  product: Product;
  
  constructor(
    //通过app.module.ts中的provider声明进行自动注入
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.product=this.productService.getProduct();
  }

}
