import { AnotherProductService } from './../share/another-product.service';
import { Product,ProductService } from './../share/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],

  
})
export class Product2Component implements OnInit {

  product: Product;
  
  constructor(
    //通过app.module.ts中的provider声明进行自动注入
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.product=this.productService.getProduct();
  }

}
