import { Results, Images, Product, Cover } from './../../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { RandomUtil } from '../../models/random-util';
import test from 'node:test';
import { crossOverUrl } from '../../../../environments/variables';





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
    let testCover;

    this.price = RandomUtil.randomNumber(1,100)
    this.kinguinParam = "?isPreorder=yes&limit=5"
    this.ps.getProducts(this.kinguinParam).subscribe(
      data => {this.results = data,console.log(this.results.results)},
      error => {alert(error.message)}
    );

    this.kinguinParam = "?name=valorant";
    this.ps.getProduct(this.kinguinParam).subscribe(
      data => {this.hero = data.results[0],
        testCover = this.hero.images.cover
        console.log(testCover)
      },
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
