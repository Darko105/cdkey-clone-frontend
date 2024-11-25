import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule
import { NavComponent } from '../../shared/components/nav/nav/nav.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NavComponent,HeroSectionComponent], // Use HttpClientModule instead of HttpClient
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected the 'styleUrl' to 'styleUrls'
})
export class HomeComponent {

  data: any;

  constructor(private apiService: ApiService) {

  }


}
