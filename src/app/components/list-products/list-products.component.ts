import { Component, OnInit } from '@angular/core';
import {Products} from "../../classes/products";
import {ApiService} from "../../services/api.service";
import {ProductFilterPipe} from "../../pipes/product-filter.pipe";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private api: ApiService ) { }
  products: Products[] = [];
  cart: Products[] = [];
  query:string = '';
  totalPrice: number = 0;
  addProduct(product){
    if (this.cart.length === 0){
      this.cart.push(product);
    }else {
      if(this.cart.indexOf(product) < 0){
        this.cart.push(product);
      }
      else {
        this.cart[this.cart.indexOf(product)].count++;
      }
    }
    this.totalPrice = 0;
    for (let i = 0; i <this.cart.length; i++){
      this.totalPrice += parseInt(this.cart[i].price) * this.cart[i].count;
    }
  }
  ngOnInit() {
    this.api.getAllProducts().subscribe( data =>{
      this.products = data;
    })
  }

}
