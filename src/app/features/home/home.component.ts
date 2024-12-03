import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { ProductComponent } from '../../shared/components/product/product/product.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Results } from '../../shared/models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,CommonModule,ProductComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products!:Results;
  kinguinParams!:string;
  constructor(public ps:ProductService) {

    this.kinguinParams = "?updatedSince=2024-11-29&updatedTo=2024-11-29T23:59:59&page=1&limit=25&sortBy=updatedAt&sortType=desc&limit=15"
    this.ps.getProducts(this.kinguinParams).subscribe(
      data => {
        this.products = data;console.log(this.products.results);
      },
      error => {alert(error.message)}
    );
}

}
