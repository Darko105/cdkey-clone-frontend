import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { ProductComponent } from '../../shared/components/product/product/product.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,CommonModule,ProductComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  constructor() {

  }


}
