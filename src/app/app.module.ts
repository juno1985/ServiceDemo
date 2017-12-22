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
    useFactory:(logger:LoggerService, isDev)=>{
      //传进来的是对象，然后获得其属性
      if(isDev.isDev){
        return new ProductService(logger);
      }else{
        return new AnotherProductService(logger);
      }
    },
    //使用deps参数进行工厂参数注入
    //增加第二个参数注入
    deps:[LoggerService,"IS_DEV_ENV"]
  }, 
  
    LoggerService,
    //生成具体值用来注入
    //传进来的是对象，然后获得其属性
    {
      provide:"IS_DEV_ENV", useValue:{isDev:true}
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
