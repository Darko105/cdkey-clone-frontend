import { Product } from './../../../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product!:Product;
  products!: Product[];

  constructor(public ps:ProductService){
  this.ps.getProduct(4).subscribe(
    data =>{this.product = data},
    error =>{alert(error[0])});

    this.ps.getProducts(10,4).subscribe(
      data => { this.products = data.results;console.log(this.products)},
      error =>{ alert('error')}
    )
  }

}
