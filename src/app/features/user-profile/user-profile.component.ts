import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  selectedSection: string = 'MY ACCOUNT'; // Default section

  // Method to update the selected section
  updateSection(section: string) {
    this.selectedSection = section;
  }
}
