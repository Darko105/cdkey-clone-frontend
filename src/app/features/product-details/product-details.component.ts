import { Product, Results } from './../../shared/models/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id!: string;
  product!:Product;
  result!:Results;
  kinguinParam!: string;

  constructor(
    public getparam:ActivatedRoute,
    public productService:ProductService,
    public router:Router
  ){

    this.getparam.params.subscribe(
      data => {
        this.id = data['id'];
      }
    );
    this.kinguinParam = "/"+this.id;
    this.productService.getProduct(this.kinguinParam).subscribe(
      data => {
        this.product = data; console.log(this.product)
      },
      error => {
        alert(error.details);
      }
    );


    this.kinguinParam = "?page=1&limit=4&sortBy=updatedAt&sortType=desc";
    this.productService.getProducts(this.kinguinParam).subscribe(
      data => {
        this.result = data; console.log(this.result)
      },
      error => {
        alert(error.details);
      }
    );
  }






  selectedTab: string = 'Information';
  setTab(tab: string): void {
    this.selectedTab = tab;
  }


}
