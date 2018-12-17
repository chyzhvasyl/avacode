import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from "../../services/api.service";
import {Products} from "../../classes/products";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: string;
  products?:Products;
  public getProductId: Subscription;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit()
  {
    this.getProductId = this.route.params.subscribe(params =>
    {
      this.id = params['id'];
    }
    );
    this.api.getAllProducts().subscribe( data =>{


      this.products = data.find(item => item.id ===  this.id);
      // for (let i = 0; i < data.length; i++)
      // {
      //   if( data[i].id = this.id){
      //     this.products = data[i];
      //
      //   }
      // }
      console.log( this.products )
    })
  }
  ngOnDestroy()
  {
    this.getProductId.unsubscribe()
  }
}
