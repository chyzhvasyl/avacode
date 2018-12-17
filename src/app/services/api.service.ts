import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Products} from "../classes/products";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Products[]>{
    return this.http.get('http://localhost:8000/home').pipe(map(data=>{
      let productsList = data["data"];
      return productsList.map(function(products:any) {
        return {id: products.id, name: products.name, category: products.category, price: products.price, description: products.description, image: products.image, count: products.count = 1};
      });
    }));


  }
}
