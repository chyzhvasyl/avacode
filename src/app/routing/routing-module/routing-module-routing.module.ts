import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailsComponent} from "../../components/product-details/product-details.component";
import {ListProductsComponent} from "../../components/list-products/list-products.component";
import {NotFoundComponent} from "../../components/not-found/not-found.component";
import {PreloadStrategy} from "../../classes/preload-strategy";
import {PreloadAllModules} from "@angular/router";

export const routes: Routes = [

  {
    path: '',
    component: ListProductsComponent,
 //   loadChildren: '../../app.module#AppModule',
    data: { preload: false, delay: false }
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
 //   loadChildren: '../../app.module#AppModule',
    data: { preload: false, delay: true }
  },
  {
    path: '**',
    component: NotFoundComponent,
   // loadChildren: '../../app.module#AppModule',
    data: { preload: false, delay: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {preloadingStrategy: PreloadStrategy})],
  exports: [RouterModule],
  providers: [PreloadStrategy]
})
export class RoutingModuleRoutingModule { }
