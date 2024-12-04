import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [
    RouterModule,
    CommonModule,
  ]
})
export class ProductComponent {
  // Input property to accept a product
  @Input() product!: {
    coverImage: string;
    currency: string;
    oldPrice: number;
    discount: number;
    platformIcon: string;
    id: number;
    name: string;
    price: number;
  };

  // Method to add product to the cart
  addToCart(product: any) {
    // Implement your logic here
    console.log('Adding to cart:', product);
  }

  // Method to add product to the wishlist
  addToWishlist(product: any) {
    // Implement your logic here
    console.log('Adding to wishlist:', product);
  }
}
