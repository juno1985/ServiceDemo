import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './share/product.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component
  ],
  imports: [
    BrowserModule
  ],
  //声明service,为将来的注入
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
