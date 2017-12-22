import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) {

   }
  getProduct():Product{
    this.logger.log("logger Service通过ProductSerivce构造函数,被注入到ProductService中");
    return new Product(0,"iPhone7",5899,"最新款iphone");

  }

}
//创建一个实体Product
export class Product{
  //构造函数
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}