import { Product, Results } from './../../shared/models/product';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ProductComponent } from '../../shared/components/product/product/product.component';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductComponent
  ],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  kinguinParams: string;
  products!:Results;
  constructor(public ps:ProductService){
    this.kinguinParams = ''
    this.ps.getProducts(this.kinguinParams).subscribe(
      data => {
        this.products = data;
      },
      error =>{
        alert(error.message)
      }
    );

  }
}
