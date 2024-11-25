import { Results, Images, Product, Cover } from './../../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { RandomUtil } from '../../models/random-util';





@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  results!:Results;
  products!:Product;
  productsToDisplay!:[];
  kinguinParam:string;
  price!:number;
  hero!:Product;

  constructor(private ps:ProductService, private sanitizer:DomSanitizer){

    this.price = RandomUtil.randomNumber(1,100)
    this.kinguinParam = "?category=game&isPreorder=yes&limit=4"
    this.ps.getProducts(this.kinguinParam).subscribe(
      data => {this.results = data,console.log(this.results.results)},
      error => {alert(error.message)}
    );

    this.kinguinParam = "?&imit=1&orderBy=kingiunId&name=fifa&priceFrom="+this.price
    this.ps.getProduct(this.kinguinParam).subscribe(
      data => {this.hero = data.results[0],console.log(this.hero.videos[0])},
      error => {alert(error.message)}
    );

  }

  safeCoverImage(url: string | null | undefined): any {
    if (!url) {
      return 'https://via.placeholder.com/800x400';
    }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }



}
