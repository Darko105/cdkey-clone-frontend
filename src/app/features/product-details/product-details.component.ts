import { Product, Results } from './../../shared/models/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id!: string;
  product!:Product;
  result!:Results;
  kinguinParam!: string;

  constructor(public getparam:ActivatedRoute,public productService:ProductService){

    this.getparam.params.subscribe(
      data => {
        this.id = data['id'];
      }
    );
    this.kinguinParam = "/"+this.id;
    this.productService.getProduct(this.kinguinParam).subscribe(
      data => {
        this.product = data;
      },
      error => {
        alert(error.details);
      }
    );
  }


}
