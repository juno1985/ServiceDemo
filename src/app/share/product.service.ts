import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  getProduct():Product{
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