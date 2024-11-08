import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Use HttpClientModule instead of HttpClient
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected the 'styleUrl' to 'styleUrls'
})
export class HomeComponent {

  data: any;

  constructor(private apiService: ApiService) {
    this.apiService.getData("/users").subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}
