import { AnotherProductService } from './share/another-product.service';
import { LoggerService } from './share/logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './share/product.service';
import { Product2Component } from './product2/product2.component';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  //声明service,为将来的注入
  providers: [{
    provide:ProductService,
    useFactory:(logger:LoggerService)=>{
      
      //大于0.5返回true,否则false
      let dev=Math.random()>0.5;
      if(dev){
        return new ProductService(logger);
      }else{
        return new AnotherProductService(logger);
      }
    },
    //使用deps参数进行工厂参数注入
    deps:[LoggerService]
  }, 
    LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
