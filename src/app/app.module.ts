import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import { ListProductsComponent } from './components/list-products/list-products.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {PreloadStrategy} from "./classes/preload-strategy";
import {routes} from './routing/routing-module/routing-module-routing.module';
import { ProductFilterPipe } from './pipes/product-filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategy}), FormsModule, ReactiveFormsModule

  ],
  providers: [ApiService, PreloadStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
