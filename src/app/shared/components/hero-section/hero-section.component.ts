// import { Results, Images, Product, Cover } from './../../models/product';
// import { Component } from '@angular/core';
// import { ProductService } from '../../../core/services/product.service';

// import { CommonModule } from '@angular/common';
// import { DomSanitizer } from '@angular/platform-browser';
// import { RandomUtil } from '../../models/random-util';
// import test from 'node:test';
// import { crossOverUrl } from '../../../../environments/variables';





// @Component({
//   selector: 'app-hero-section',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './hero-section.component.html',
//   styleUrl: './hero-section.component.css'
// })
// export class HeroSectionComponent {

//   results!:Results;
//   products!:Product;
//   productsToDisplay!:[];
//   kinguinParam:string;
//   price!:number;
//   hero!:Product;

//   constructor(private ps:ProductService, private sanitizer:DomSanitizer){


//     this.price = RandomUtil.randomNumber(1,100)
//     this.kinguinParam = "?isPreorder=yes&limit=5"
//     this.ps.getProducts(this.kinguinParam).subscribe(
//       data => {this.results = data},
//       error => {alert(error.message)}
//     );

//     this.kinguinParam = "?name=valorant";
//     this.ps.getProduct(this.kinguinParam).subscribe(
//       data => {this.hero = data.results[0]},
//       error => {alert(error.message)}
//     );



//   }

//   safeCoverImage(url: string | null | undefined): any {
//     if (!url) {
//       return 'https://via.placeholder.com/800x400';
//     }
//     return this.sanitizer.bypassSecurityTrustUrl(url);
//   }



// }






import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../../core/services/product.service';
import { Results, Product } from '../../models/product';
import { RandomUtil } from '../../models/random-util';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  results!: Results;
  products!: Product;
  productsToDisplay: Product[] = [];
  kinguinParam: string;
  price!: number;
  hero!: Product[];

  currentSlideIndex = 0;
  slideInterval!: any;
  slidePosition: number;

  constructor(private ps: ProductService, private sanitizer: DomSanitizer) {
    this.price = RandomUtil.randomNumber(1, 100);
    this.kinguinParam = '';
    this.slidePosition = 0;
  }

  ngOnInit(): void {
    // Get products for the slider

    this.kinguinParam = '?page=1&limit=10&sortBy=updatedAt&sortType=desc';
    this.ps.getProducts(this.kinguinParam).subscribe(
      (data) => {
        this.hero = data.results;
        this.productsToDisplay = data.results;
        this.startSlideShow();
      },
      (error) => {
        alert(error.message);
      }
    );

    // Fetch a specific hero product
    this.kinguinParam = '?isPreorder=yes&activePreorder=yes&limit=5&sortBy=updatedAt&sortType=desc';
    this.ps.getProducts(this.kinguinParam).subscribe(
      (data) => {
        this.results = data;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.productsToDisplay.length;
    }, 3500); // Change slide every 5 seconds
  }

  safeCoverImage(url: string | null | undefined): any {
    if (!url) {
      return 'https://via.placeholder.com/800x400';
    }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  get currentProduct(): Product {
    return this.productsToDisplay[this.currentSlideIndex];
  }
}
