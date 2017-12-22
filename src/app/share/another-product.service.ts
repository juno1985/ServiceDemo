import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { ProductService,Product } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService{

  constructor(public logger:LoggerService) { }

  getProduct(): Product{
    return new Product(1,"sumsung4S",4899,"三星手机");
  }

}
