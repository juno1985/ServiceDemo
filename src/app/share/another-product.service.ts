import { Injectable } from '@angular/core';
import { ProductService,Product } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService{


  getProduct(): Product{
    return new Product(1,"sumsung4S",4899,"三星手机");
  }

  constructor() { }

}
